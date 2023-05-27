import { CURRENT_RESUME_ID } from '$env/static/private';
import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// const rawResume = RESUME_V1;



	// const allSkills: Skill[] = [
	// 	...rawResume.experience.flatMap((e) => e.skills?.filter(e => !!e) ?? []),
	// 	...rawResume.projects.flatMap((p) => p.skills?.filter(e => !!e) ?? []),
	// 	...rawResume.experience.flatMap((e) => e.highlights?.flatMap((h) => h.skills?.filter(e => !!e)) ?? []),
	// ];

	// for (const skill of allSkills) {
	// 	const existingSkill = await prisma.skill.findUnique({
	// 		where: { name: skill.name },
	// 	});

	// 	if (!existingSkill) {
	// 		await prisma.skill.create({
	// 			data: {
	// 				name: skill.name
	// 			}
	// 		});
	// 	}
	// }

	// // const newExperienceSkills = await Promise.all(
	// // 	rawResume.experience.flatMap((e) => e.skills).map(async (s) => {
	// // 		const skill = await prisma.skill.findUnique({
	// // 			where: { name: s!.name },
	// // 		});

	// // 		if (!skill) {
	// // 			throw new Error(`Skill not found: ${s!.name}`);
	// // 		}

	// // 		return prisma.experience_skill.create({
	// // 			data: {
	// // 				experience_id: newResume.id,
	// // 				skill_id: skill.id,
	// // 			},
	// // 		});
	// // 	})
	// // );

	// // const newProjectSkills = await Promise.all(
	// // 	rawResume.projects.flatMap((p) => p.skills).map(async (s) => {
	// // 		const skill = await prisma.skill.findUnique({
	// // 			where: { name: s!.name },
	// // 		});

	// // 		if (!skill) {
	// // 			throw new Error(`Skill not found: ${s!.name}`);
	// // 		}

	// // 		return prisma.project_skill.create({
	// // 			data: {
	// // 				project_id: newResume.id,
	// // 				skill_id: skill.id,
	// // 			},
	// // 		});
	// // 	})
	// // );


	// // const newHighlightSkills = await Promise.all(
	// // 	rawResume.experience.flatMap((e) => e.highlights?.flatMap((h) => h.skills) ?? []).map(async (s) => {
	// // 		const skill = await prisma.skill.findUnique({
	// // 			where: { name: s!.name },
	// // 		});

	// // 		if (!skill) {
	// // 			throw new Error(`Skill not found: ${s!.name}`);
	// // 		}

	// // 		return prisma.highlight_skill.create({
	// // 			data: {
	// // 				highlight_id: newResume.id,
	// // 				skill_id: skill.id,
	// // 			},
	// // 		});
	// // 	})
	// // );

	// const newResume = await prisma.resume.create({
	// 	data: {
	// 		name: rawResume.name,
	// 		title: rawResume.title,
	// 		summary: rawResume.summary,
	// 		contact_information: {
	// 			create: rawResume.contact.map((ci) => {
	// 				return {
	// 					title: ci.title,
	// 					value: ci.value,
	// 					icon_url: ci.iconUrl,
	// 					type: ci.type
	// 				};
	// 			})
	// 		},
	// 		education: {
	// 			create: rawResume.education.map((e) => {
	// 				return {
	// 					school: e.school,
	// 					date: e.date,
	// 					degree: e.degree,
	// 					concentration: e.concentration
	// 				};
	// 			})
	// 		},
	// 		project: {
	// 			create: rawResume.projects.map((p) => {
	// 				return {
	// 					title: p.title,
	// 					summary: p.summary,
	// 					link: p.link,
	// 					project_skill: {
	// 						create: p.skills?.map((s) => {
	// 							return {
	// 								skill: {
	// 									connect: {
	// 										name: s!.name
	// 									}
	// 								}
	// 							};
	// 						}
	// 						)
	// 					}
	// 				};
	// 			})
	// 		},
	// 		experience: {
	// 			create: rawResume.experience.map((e) => {
	// 				return {
	// 					company: e.company,
	// 					title: e.title,
	// 					start: e.start,
	// 					end: e.end,
	// 					location: e.location,
	// 					company_description: e.companyDescription,
	// 					summary: e.summary,
	// 					private: e.private,
	// 					sort: 0,
	// 					experience_skill: {
	// 						create: e.skills?.map((s) => {
	// 							return {
	// 								skill: {
	// 									connect: {
	// 										name: s!.name
	// 									}
	// 								}
	// 							};
	// 						})
	// 					},
	// 					highlight: {
	// 						create: e.highlights?.map((h) => {
	// 							return {
	// 								title: h.title,
	// 								points: h.points,
	// 								highlight_skill: {
	// 									create: h.skills?.map((s) => {
	// 										return {
	// 											skill: {
	// 												connect: {
	// 													name: s!.name
	// 												}
	// 											}
	// 										};
	// 									})
	// 								}

	// 							};
	// 						})
	// 					}
	// 				};

	// 			})
	// 		}
	// 	}
	// });




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
								skill: true
							}
						}
					}
				},
				experience: {
					include: {
						experience_skill: {
							include: {
								skill: true
							}
						},
						highlight: {
							include: {
								highlight_skill: {
									include: {
										skill: true
									}
								}
							}
						}
					}
				},

			}
		});

		return resume;
	}


	return {
		resume: await getResume()

	};
};
