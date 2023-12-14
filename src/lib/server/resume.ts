import { CURRENT_RESUME_ID } from "$env/static/private";
import type { expanded_resume } from "$lib/models/prisma-helpers";
import { prisma } from "$lib/prisma";

export const getCurrentResume = async (): Promise<expanded_resume | null> => {
    return prisma.resume.findFirst({
        where: {
            id: CURRENT_RESUME_ID
        },
        include: {
            education: true,
            experience: {
                include: {
                    highlight: true,
                    experience_skill: {
                        include: {
                            skill: {
                                include: {
                                    skill_category: {
                                        include: {
                                            skill: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            project: {
                include: {
                    project_skill: {
                        include: {
                            skill: {
                                include: {
                                    skill_category: {
                                        include: {
                                            skill: true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    project_technology: {
                        include: {
                            technology: true
                        }
                    }
                }
            },
        }
    });
};