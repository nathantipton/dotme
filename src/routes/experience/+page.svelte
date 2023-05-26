<script lang="ts">
	import type { PageData } from './$types';

	import ContactDetail from './components/ContactDetail.svelte';
	import Education from './components/Education.svelte';
	import Experience from './components/Experience.svelte';
	import Project from './components/Project.svelte';
	import Skill from './components/Skill.svelte';

	export let data: PageData;
	const { resume } = data;
</script>

{#if resume}
	<div>
		<div
			class="container mx-auto flex max-w-4xl flex-col items-stretch justify-start gap-8 bg-white px-4 py-8 shadow-md dark:border-x dark:border-zinc-800 dark:bg-zinc-900 dark:bg-opacity-70 md:px-16"
		>
			<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h1 class="text-4xl font-bold">{resume.name}</h1>
					<h3 class="text-xl font-semibold text-zinc-700 dark:text-zinc-300">{resume.title}</h3>
				</div>
				<div class="flex md:flex-col">
					{#each resume.contact_information as contact}
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
					{#each resume.resume_skill as skill}
						{#if skill.skill}
							<Skill skill={skill.skill} />
						{/if}
					{/each}
				</div>
			</div>

			<div class="flex flex-col items-stretch justify-start gap-2">
				<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Experience</h2>
				<div class="flex flex-col items-stretch justify-start gap-8">
					{#each resume.experience.filter(e=>!e.private) as experience}
						<Experience {experience} />
					{/each}
				</div>
			</div>

			<div class="flex flex-col items-stretch justify-start gap-2">
				<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Education</h2>
				<div>
					{#each resume.education as education}
						<Education {education} />
					{/each}
				</div>
			</div>

			<div class="flex flex-col items-stretch justify-start gap-2">
				<h2 class="text-xl font-bold text-zinc-700 dark:text-zinc-300">Projects</h2>
				<div class="flex flex-col items-stretch justify-start gap-8">
					{#each resume.project as project}
						<Project {project} />
					{/each}
				</div>
			</div>
		</div>
	</div>
{:else}
	<div>No resume found</div>
{/if}
