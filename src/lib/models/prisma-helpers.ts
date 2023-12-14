import type { Prisma } from "@prisma/client";

export type expanded_resume = Prisma.resumeGetPayload<{
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
}>;