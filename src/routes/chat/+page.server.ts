import { aiQuerySchema } from "$lib/schemas/ai-query";
import { searchResume } from "$lib/server/ai/search";
import { getCurrentResume } from "$lib/server/resume";
import { fail } from "@sveltejs/kit";
import { superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const form = await superValidate(aiQuerySchema)
    return { form };
};


export const actions: Actions = {
    query: async ({ request }) => {
        const form = await superValidate(request, aiQuerySchema);
        const { question } = form.data;

        if (!form.valid) {
            return fail(400, { form })
        }

        const resume = await getCurrentResume();

        if (!resume) {
            return fail(500, { form });
        }


        try {
            const response = await searchResume(resume, question);
            return { form, response };
        } catch (error) {
            return fail(500, { form, error });
        }
    }
}