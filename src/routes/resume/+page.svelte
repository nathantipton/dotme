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

<div class="dark:bg-zinc-950 bg-zinc-100">
	<div
		class="container mx-auto max-w-4xl bg-white py-8 px-16 shadow-md dark:border-x dark:border-zinc-800 dark:bg-zinc-900"
	>
		<div>In Progress</div>
		<!-- <img src={resume.photoUrl} alt="Nathan Tipton" /> -->
		<div>
			<h1>{resume.name}</h1>
			<h3>{resume.title}</h3>
		</div>

		<div>
			{#each resume.contact as contact}
				<ContactDetail {contact} />
			{/each}
		</div>

		<p>
			{resume.summary}
		</p>

		<div>
			<h2>Skills</h2>
			<div>
				{#each resume.skills as skill}
					<Skill {skill} />
				{/each}
			</div>
		</div>

		<div>
			<h2>Experience</h2>
			<div>
				{#each resume.experience as experience}
					<Experience {experience} />
				{/each}
			</div>
		</div>

		<div>
			<h2>Education</h2>
			<div>
				{#each resume.education as education}
					<Education {education} />
					<hr />
				{/each}
			</div>
		</div>

		<div>
			<h2>Projects</h2>
			<div>
				{#each resume.projects as project}
					<Project {project} />
					<hr />
				{/each}
			</div>
		</div>
	</div>
</div>
