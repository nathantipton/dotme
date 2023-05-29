<script lang="ts">
	import type { project } from '@prisma/client';

	export let project: project;
	$: console.log(project);
</script>

<svelte:element
	this={project.link ? 'a' : 'div'}
	href={project.link}
	target="_blank"
	rel="noopener noreferrer"
	class="flex w-full flex-col items-start justify-start gap-2 rounded border border-zinc-300 bg-zinc-50 p-6 transition-all dark:border-zinc-700 dark:bg-zinc-900 md:max-w-xs {project.link
		? 'hover:border-zinc-400 hover:bg-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800'
		: ''}"
>
	<div class="h-6">
		{#if project.image_url}
			<img class="h-6 rounded" alt={project.title} src={project.image_url} />
		{/if}
	</div>

	<h3 class="font-bold">{project.title}</h3>
	<p class="text-sm text-zinc-500 dark:text-zinc-400">{project.summary}</p>
</svelte:element>
