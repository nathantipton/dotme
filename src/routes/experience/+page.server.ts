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
				resume_skill: {
					include: {
						skill: true
					}
				},
				project: true,
				experience: {
					include: {
						highlight: true
					},
					orderBy: [
						{
							sort: 'asc'
						}
					]
				}
			}
		});

		return resume;
	}


	return {
		resume: await getResume()

	};
};
