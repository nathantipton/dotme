<script lang="ts">
	import type { project } from '@prisma/client';

	export let project: project;
</script>

<a
	href="/projects/{project.slug}"
	rel="noopener noreferrer"
	class="flex w-full flex-col items-start justify-start gap-2 rounded border border-zinc-300 bg-zinc-50 p-6 transition-all hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700
	dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
>
	<div class="h-6">
		{#if project.image_url}
			<img
				class="h-6 rounded"
				alt={project.title}
				src={project.image_url}
				style={`view-transition-name: project-image-${project.id}`}
			/>
		{/if}
	</div>

	<h3 class="font-bold" style={`view-transition-name: project-title-${project.id}`}>
		{project.title}
	</h3>
	<p class="text-sm text-zinc-500 dark:text-zinc-400">{project.summary}</p>
</a>
