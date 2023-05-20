<script lang="ts">
	import type { Experience } from '../../../lib/resumes/v1';

	export let experience: Experience;
</script>

<div class="flex flex-col items-stretch justify-start">
	<div class="flex flex-row items-center justify-between">
		<div>
			<h3>{experience.title}</h3>
			<h4>{experience.company} | {experience.location}</h4>
		</div>
		<div>
			<div>{experience.start} - {experience.end}</div>
		</div>
	</div>
	<div class="opacity-90">{experience.companyDescription}</div>
	<div>{experience.summary}</div>
	<div>
		{#each experience.highlights as highlight}
			<h4>{highlight.title}</h4>
			<ul>
				{#each highlight.points as point}
					<li class=" list-disc">{point}</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
