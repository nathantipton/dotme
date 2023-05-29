<script lang="ts">
	import '@fontsource/montserrat';
	import '@fontsource/open-sans';
	// Your selected Skeleton theme:
	import '../theme.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.css';

	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const isDarkMode = writable(false);

	const navItems = [
		{
			name: 'Home',
			path: '/',
			target: null
		},
		{
			name: 'Experience',
			path: '/experience',
			target: null
		},
		{
			name: 'Projects',
			path: '/projects',
			target: null
		},
		{
			name: 'LinkedIn',
			path: 'https://www.linkedin.com/in/tntipton/',
			target: '_blank'
		},
		{
			name: 'GitHub',
			path: 'https://github.com/nathantipton',
			target: '_blank'
		}
	];

	$: currentPath = $page.url.pathname;

	onMount(() => {
		const prefersDarkMode = document.documentElement.classList.contains('dark');
		if (prefersDarkMode) {
			isDarkMode.set(true);
		}
	});
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
	<meta property="og:title" content="Nathan Tipton - Home" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Creative and ambitious software developer with ten years of demonstrated experience in the
        development, design, implementation, and maintenance of modern web applications. Highly
        effective at understanding business needs and providing innovative solutions."
	/>
	<meta property="og:url" content="https://nathantipton.me" />
	<meta property="og:image" content="https://www.nathantipton.me/profile.png" />
	<meta property="og:image:alt" content="Nathan Tipton - Home" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ntipton21" />
	<meta name="twitter:title" content="Nathan Tipton - Home" />
	<meta
		name="twitter:description"
		content="Creative and ambitious software developer with ten years of demonstrated experience in the
        development, design, implementation, and maintenance of modern web applications. Highly
        effective at understanding business needs and providing innovative solutions."
	/>
	<meta name="twitter:image" content="https://www.nathantipton.me/profile.png" />
	<meta name="twitter:image:alt" content="Nathan Tipton - Home" />
</svelte:head>

<div class="relative min-h-safe min-w-full">
	<div class="bg-gradient fixed bottom-0 left-0 right-0 top-0 -z-10" />
	<div class="z-10">
		<nav class="z-20 p-8">
			<ul class="flex flex-row items-center justify-end gap-4">
				{#each navItems as navItem}
					<li>
						<a
							href={navItem.path}
							target={navItem.target}
							class="text-zinc-500 underline-offset-8 transition-all hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white {currentPath ===
							navItem.path
								? 'font-semibold text-zinc-800 underline dark:text-zinc-100'
								: ''}">{navItem.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(.dark .bg-gradient) {
		background-color: hsla(240, 10%, 3%, 1);
		background-image: radial-gradient(at 63% 65%, hsla(17, 87%, 40%, 0.12) 0px, transparent 50%),
			radial-gradient(at 40% 50%, hsla(240, 3%, 15%, 0.8) 0px, transparent 50%);
	}

	:global(.bg-gradient) {
		background-color: hsla(0, 0%, 98%, 1);
		background-image: radial-gradient(at 63% 65%, hsla(17, 34%, 61%, 0.192) 0px, transparent 50%),
			radial-gradient(at 40% 50%, hsla(240, 7%, 70%, 0.226) 0px, transparent 50%);
	}
</style>
