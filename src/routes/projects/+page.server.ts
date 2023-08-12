import { prisma } from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {

    const getProjects = async () => {
        return prisma.project.findMany({
            orderBy: {
                sort: "asc"
            }
        });
    };

    return {
        projects: await getProjects()
    };
};