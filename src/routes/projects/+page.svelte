<script lang="ts">
	import type { PageData } from './$types';
	import ProjectCard from './ProjectCard.svelte';

	export let data: PageData;

	const { projects } = data;
</script>

<div class="container mx-auto flex flex-col items-stretch justify-start gap-8 py-8">
	<h1 class="text-3xl font-bold">My Projects</h1>

	<div class="flex flex-row flex-wrap items-stretch justify-start gap-4">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
