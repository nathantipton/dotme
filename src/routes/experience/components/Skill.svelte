<script lang="ts">
	import { selectedSkills } from '$lib/stores/skills.store';
	import type { skill } from '@prisma/client';
	export let skill: skill;

	const toggleSkill = () => {
		selectedSkills.update((skills) => {
			if (skills.includes(skill.id)) {
				return skills.filter((s) => s !== skill.id);
			} else {
				return [...skills, skill.id];
			}
		});
	};
</script>

<button
	class="cursor-pointer rounded px-2 py-1.5 text-xs transition-all dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-white
		{$selectedSkills.includes(skill.id)
		? 'border border-zinc-700 bg-zinc-100 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-700 dark:text-white'
		: 'border border-transparent'}"
	aria-label="Toggle skill"
	on:click={toggleSkill}
>
	{skill.name}
</button>
