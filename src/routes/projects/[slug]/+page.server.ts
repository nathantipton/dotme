import { prisma } from "$lib/prisma";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    if (!params || !params.slug) {
        throw error(404, 'Not found');
    }

    const project = await prisma.project.findUnique({
        where: {
            slug: params.slug
        },
        include: {
            project_technology: {
                include: {
                    technology: true
                }
            }
        }
    });
    if (!project) {
        throw error(404, 'Not found');
    }


    return {
        project
    }

}