<script lang="ts">
	import type { skill } from '@prisma/client';
	export let skill: skill;
</script>

<div
	class="cursor-pointer rounded bg-zinc-200 px-2 py-1.5 text-xs dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-white"
>
	{skill.name}
</div>
