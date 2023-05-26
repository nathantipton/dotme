<script lang="ts">
	import type { education } from '@prisma/client';
	export let education: education;
</script>

<div class="text-lg font-semibold text-zinc-700 dark:text-zinc-200">{education.school}</div>
<div class="text-zinc-700 dark:text-zinc-200">
	{education.degree} | {education.concentration}
</div>
<div class="text-zinc-500 dark:text-zinc-400">{education.date}</div>
