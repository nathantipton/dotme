import { CURRENT_RESUME_ID } from '$env/static/private';
import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

	const getResume = async () => {

		const resume = await prisma.resume.findUnique({
			where: {
				id: CURRENT_RESUME_ID
			},
			include: {
				contact_information: true,
				education: true,
				project: {
					include: {
						project_skill: {
							include: {
								skill: {
									include: {
										skill_category: true
									}
								},
							}
						}
					}
				},
				experience: {
					include: {
						experience_skill: {
							include: {
								skill: {
									include: {
										skill_category: true
									}
								},
							}
						},
						highlight: {
							include: {
								highlight_skill: {
									include: {
										skill: {
											include: {
												skill_category: true
											}
										},
									}
								}
							}
						}
					}
				},

			}
		});
		console.log(resume)
		return resume;
	}


	return {
		resume: await getResume()

	};
};
