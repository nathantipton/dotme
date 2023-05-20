<script lang="ts">
	import type { Skill } from '../../../lib/resumes/v1';
	export let skill: Skill;
</script>

<div class="rounded bg-zinc-200 px-2 py-1.5 text-xs">
	{skill.name}
</div>
