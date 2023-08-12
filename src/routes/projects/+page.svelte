<script lang="ts">
	import type { PageData } from './$types';
	import ProjectCard from './ProjectCard.svelte';

	export let data: PageData;

	const { projects } = data;
</script>

<div class="container mx-auto flex flex-col items-stretch justify-start gap-8 px-4 py-8 md:px-0">
	<h1 class="text-3xl font-bold dark:text-zinc-50">My Projects</h1>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
