<script lang="ts">
	import { analytics } from '$lib/firebase';
	import { isDarkMode } from '$lib/stores/ui.store';
	import { logEvent } from 'firebase/analytics';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let data: PageData;
	const { project } = data;

	onMount(() => {
		if (browser) {
			logEvent(analytics, 'view_project', {
				project_id: project.id,
				project_title: project.title
			});
		}
	});
</script>

<svelte:head>
	<meta property="og:title" content="Nathan Tipton - {project.title}" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={project.summary} />
	<meta property="og:url" content="https://nathantipton.me" />
	<meta property="og:image" content="https://www.nathantipton.me/profile.png" />
	<meta property="og:image:alt" content="Nathan Tipton - {project.title}" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@ntipton21" />
	<meta name="twitter:title" content="Nathan Tipton - {project.title}" />
	<meta name="twitter:description" content={project.summary} />
	<meta name="twitter:image" content="https://www.nathantipton.me/profile.png" />
	<meta name="twitter:image:alt" content="Nathan Tipton - {project.title}" />
</svelte:head>

<div
	class="container mx-auto flex max-w-4xl flex-col items-stretch justify-start gap-8 p-4 md:px-0"
>
	<div class="-my-6">
		<a class="btn-ghost btn" href="/projects">
			<i class="fa-solid fa-arrow-left mr-2" />
			Back to Projects
		</a>
	</div>

	{#if project.banner_url}
		<img src="/{project.banner_url}" alt="Banner for {project.title}" />
	{/if}

	<div class="flex flex-row items-start justify-between">
		<div class="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center">
			<img class="h-12 rounded" src="/{project.image_url}" alt="" />
			<h1 class="text-4xl font-bold dark:text-zinc-100">{project.title}</h1>
			<div
				class="ml-2 rounded border border-zinc-300 bg-zinc-200 px-3 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
			>
				{project.status}
			</div>
		</div>
		<div class="flex flex-row items-center justify-end gap-4">
			{#if project.github_link}
				<div class="tooltip" data-tip="Check out my GitHub">
					<a
						href={project.github_link}
						class="btn-ghost btn"
						on:click={() =>
							logEvent(analytics, 'navigate_to_github', {
								project_id: project.id,
								project_title: project.title
							})}
					>
						<i class="fab fa-github fa-xl md:fa-lg" />
						<span class="hidden md:visible">View on GitHub</span>
					</a>
				</div>
			{/if}
			{#if project.link}
				<div class="tooltip" data-tip="Go to site">
					<a
						href={project.link}
						target="_blank"
						class="btn-outline btn"
						on:click={() =>
							logEvent(analytics, 'navigate_to_site', {
								project_id: project.id,
								project_title: project.title
							})}
					>
						<span class="hidden md:visible">go to site</span>
						<i class="fa-solid fa-arrow-up-right-from-square" />
					</a>
				</div>
			{/if}
		</div>
	</div>
	<div>
		<p>{project.description}</p>
	</div>

	<div class="flex flex-col gap-4 border-y border-zinc-300 py-8 dark:border-zinc-800">
		<h2 class="text-xl font-bold dark:text-zinc-200">Tech Stack</h2>
		<div class="flex flex-row flex-wrap gap-6">
			{#each project.project_technology as project_technology}
				<div class="tooltip" data-tip={project_technology.technology.name}>
					<img
						class="h-6 text-zinc-50"
						src="/tech-icons/{$isDarkMode
							? project_technology.technology.dark_icon
							: project_technology.technology.icon}"
						alt=""
					/>
				</div>
			{/each}
		</div>
	</div>

	<div>
		<h2 class="text-xl font-bold dark:text-zinc-200">Notes</h2>
		<div>{@html project.notes}</div>
	</div>
</div>
