import type { expanded_resume } from "$lib/models/prisma-helpers";
import { Document } from "langchain/document";

export const resumeToDocuments = (resume: expanded_resume): Document[] => {
    const documents: Document[] = [];

    // Project Docs
    resume.project.forEach(project => {
        project.project_technology.forEach(technology => {
            documents.push(new Document(
                {
                    pageContent: `
                        Project: ${project.title}
                        Technology: ${technology.technology.name}}
                    `,
                    metadata: {
                        source: "technology",
                        id: technology.technology.id,
                        name: technology.technology.name,
                    }
                }
            ));
        });

        project.project_skill.forEach(skill => {
            documents.push(new Document(
                {
                    pageContent: `
                        Project: ${project.title}
                        Skill: ${skill.skill.name}
                        Category: ${skill.skill.skill_category?.name}
                        Related Skills: ${skill.skill.skill_category?.skill.map(skill => skill.name).join(", ")}
                    `,
                    metadata: {
                        source: "skill",
                        id: skill.skill.id,
                        name: skill.skill.name,
                        relatedSkills: skill.skill.skill_category?.skill.map(skill => skill.name),
                        categoy: skill.skill.skill_category?.name,
                    }
                }
            ));
        });
    });

    // Experience Docs
    resume.experience.forEach(experience => {
        experience.experience_skill.forEach(skill => {
            documents.push(new Document(
                {
                    pageContent: `
                        Job Title: ${experience.title}
                        Company: ${experience.company}
                        Skill: ${skill.skill.name}
                        Category: ${skill.skill.skill_category?.name}
                        Related Skills: ${skill.skill.skill_category?.skill.map(skill => skill.name).join(", ")}
                    `,
                    metadata: {
                        source: "skill",
                        id: skill.skill.id,
                        name: skill.skill.name,
                        relatedSkills: skill.skill.skill_category?.skill.map(skill => skill.name),
                        categoy: skill.skill.skill_category?.name,
                    }
                }
            ));
        });

        documents.push(new Document({
            pageContent: `
                Job Title: ${experience.title}
                Company: ${experience.company}
                Location: ${experience.location}
                Dates: ${experience.start} - ${experience.end}
            `,
            metadata: {
                source: "jobs",
                id: experience.id,
                name: experience.title,
                relatedSkills: experience.experience_skill.map(skill => skill.skill.name),
            }
        }  ));
    });



    // Education Docs
    resume.education.forEach(education => {
        documents.push(new Document(
            {
                pageContent: `
                    School: ${education.school}
                    Degree: ${education.degree}
                    Concentration: ${education.concentration}
                    Dates: ${education.date}
                `,
                metadata: {
                    source: "education",
                    id: education.id,
                    name: education.school,
                }
            }
        ));
    });

    return documents;
}