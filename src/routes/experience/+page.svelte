<script lang="ts">
	import type { ResumeV1 } from '../../lib/resumes/v1';
	import ContactDetail from './components/ContactDetail.svelte';
	import Education from './components/Education.svelte';
	import Experience from './components/Experience.svelte';
	import Project from './components/Project.svelte';
	import Skill from './components/Skill.svelte';
	export let data: { resume: ResumeV1 };

	const { resume } = data;
</script>

<div>
	<div
		class="container mx-auto flex max-w-4xl flex-col items-stretch justify-start gap-8 bg-white px-4 py-8 shadow-md dark:border-x dark:border-zinc-800 dark:bg-zinc-900 md:px-16"
	>
		<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<h1 class="text-4xl font-bold">{resume.name}</h1>
				<h3 class="text-xl font-semibold text-zinc-700 dark:text-zinc-300">{resume.title}</h3>
			</div>
			<div class="flex md:flex-col">
				{#each resume.contact as contact}
					<ContactDetail {contact} />
				{/each}
			</div>
		</div>

		<p class="text-sm text-zinc-700 dark:text-zinc-400 md:text-base">
			{resume.summary}
		</p>

		<div class="flex flex-col items-stretch justify-start gap-2">
			<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Skills</h2>
			<div class="flex flex-wrap gap-2">
				{#each resume.skills as skill}
					<Skill {skill} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col items-stretch justify-start gap-2">
			<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Experience</h2>
			<div class="flex flex-col items-stretch justify-start gap-8">
				{#each resume.experience as experience}
					<Experience {experience} />
				{/each}
			</div>
		</div>

		<div class="flex flex-col items-stretch justify-start gap-2">
			<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Education</h2>
			<div>
				{#each resume.education as education}
					<Education {education} />
					<hr />
				{/each}
			</div>
		</div>

		<div class="flex flex-col items-stretch justify-start gap-2">
			<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Projects</h2>
			<div>
				{#each resume.projects as project}
					<Project {project} />
					<hr />
				{/each}
			</div>
		</div>
	</div>
</div>
