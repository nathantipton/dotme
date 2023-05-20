<script lang="ts">
	import type { Skill } from '../../../lib/resumes/v1';
	export let skill: Skill;
</script>

<div class="rounded bg-zinc-200 px-2 py-1.5 text-xs dark:bg-zinc-800 dark:text-zinc-200 dark:hover:text-white cursor-pointer dark:hover:bg-zinc-700">
	{skill.name}
</div>
