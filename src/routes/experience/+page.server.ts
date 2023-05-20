import { RESUME_V1 } from '$lib/resumes/v1';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		resume: RESUME_V1
	};
};
