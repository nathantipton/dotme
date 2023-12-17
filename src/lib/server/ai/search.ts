import type { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

import type { expanded_resume } from "$lib/models/prisma-helpers";
import { resumeToDocuments } from "./document-helpers";
import openai from "./openai";

let store: MemoryVectorStore | undefined;

const createResumeStore = async (resume: expanded_resume) => {
    const documents: Document[] = resumeToDocuments(resume);
    const store = MemoryVectorStore.fromDocuments(documents, new OpenAIEmbeddings());
    return store;
};

export const searchResume = async (resume: expanded_resume, query: string) => {

    if (!store) {
        store = await createResumeStore(resume);
    }
    const results = (await store.similaritySearchWithScore(query)).filter(r => r[1] > 0.7);

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-16k-0613',
        temperature: 0,
        messages: [
            {
                role: 'assistant',
                content:
                    `You are a helpful AI assistant that is helping recruiters find information about a candidate. 
                    Answer questions to the best of your ability. If questions center around a specific topic that is not in the context, check the context for similar topics and use that to answer the question.`,
            },
            {
                role: 'user',
                content: `Answer the following question using the provided context. Return the text in markdown format use your best judgement on presentation. 
                If the question seems personal or not about Nathan's work as a software engineer, just make up an outlandish funny heroic story about me and ask the recruiter to stick with questions about Nathan's work as a software engineer.
                If you cannot answer the question, just say I don\'t know and then say something nice and heroic about Nathan.
                Question: ${query}
                Context: ${results.map((r) => r[0].pageContent).join('\n')}`,
            },
        ],
    });

    const metadata = results.map((r) => r[0].metadata);

    return { response: response.choices[0].message.content, metadata }
};