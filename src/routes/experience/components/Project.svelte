<script lang="ts">
	import type { project } from '@prisma/client';
	import Skill from './Skill.svelte';

	export let project: project;
</script>

<div>
	<h2 class="text-lg font-semibold text-zinc-700 dark:text-zinc-200">{project.title}</h2>
	<h4 class="text-zinc-700 dark:text-zinc-200">{project.summary}</h4>
	<a
		href={project.link}
		class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 hover:dark:text-zinc-100"
		>{project.link}</a
	>
</div>
