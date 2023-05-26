<script lang="ts">
	import type { experience, highlight } from '@prisma/client';

	export let experience: experience & { highlight: highlight[] };
</script>

<div class="flex flex-col items-stretch justify-start gap-2">
	<div class="flex flex-row items-start justify-between">
		<div>
			<h3 class="text-lg font-semibold text-zinc-700 dark:text-zinc-200">{experience.title}</h3>
			<h4 class="text-zinc-700 dark:text-zinc-200">
				{experience.company} | {experience.location}
			</h4>
		</div>
		<div>
			<div class="text-zinc-700 dark:text-zinc-200">
				{experience.start} - {experience.end}
			</div>
		</div>
	</div>
	<div class="text-sm text-zinc-700 dark:text-zinc-200">{experience.company_description}</div>
	<div class="text-sm text-zinc-700 dark:text-zinc-200">{experience.summary}</div>
	<div class="flex flex-col items-stretch justify-start gap-2">
		{#each experience.highlight as highlight}
			<h4 class="font-semibold text-zinc-700 dark:text-zinc-200">{highlight.title}</h4>
			<ul class="list-inside text-sm">
				{#each highlight.points as point}
					<li class=" list-disc py-1 text-zinc-500 dark:text-zinc-400">{point}</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
