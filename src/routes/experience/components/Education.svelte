<script lang="ts">
	import type { Education } from '../../../lib/resumes/v1';
	export let education: Education;
</script>

<div class="text-lg font-semibold text-zinc-700 dark:text-zinc-200">{education.school}</div>
<div class="text-zinc-700 dark:text-zinc-200">{education.degree} | {education.concentration}</div>
<div class="text-zinc-500 dark:text-zinc-400">{education.date}</div>
