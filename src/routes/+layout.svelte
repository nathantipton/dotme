<script lang="ts">
	import '@fontsource/montserrat';
	import '@fontsource/open-sans';
	// Your selected Skeleton theme:
	import '../theme.css';

	// This contains the bulk of Skeletons required styles:
	// NOTE: this will be renamed skeleton.css in the v2.x release.
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.css';

	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	const isDarkMode = writable(false);

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
	<meta property="og:image" content="https://www.nathantipton.me/profile.jpg" />
	<meta property="og:image:alt" content="Nathan Tipton - Home" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ntipton21" />
	<meta name="twitter:title" content="Nathan Tipton - Resume" />
	<meta
		name="twitter:description"
		content="Creative and ambitious software developer with ten years of demonstrated experience in the
        development, design, implementation, and maintenance of modern web applications. Highly
        effective at understanding business needs and providing innovative solutions."
	/>
	<meta name="twitter:image" content="https://www.nathantipton.me/profile.jpg" />
	<meta name="twitter:image:alt" content="Nathan Tipton - Resume" />
</svelte:head>

<div class="bg-gradient min-h-safe min-w-full dark:bg-zinc-950">
	<slot />
</div>

<style lang="postcss">
	:global(.dark .bg-gradient) {
		background-color: hsla(240, 10%, 3%, 1);
		background-image: radial-gradient(at 63% 65%, hsla(17, 87%, 40%, 0.09) 0px, transparent 50%),
			radial-gradient(at 40% 50%, hsla(240, 3%, 15%, 0.48) 0px, transparent 50%);
	}

	:global(.bg-gradient) {
		background-color: hsla(0, 0%, 98%, 1);
		background-image: radial-gradient(at 63% 65%, hsla(17, 34%, 61%, 0.192) 0px, transparent 50%),
			radial-gradient(at 40% 50%, hsla(240, 7%, 70%, 0.226) 0px, transparent 50%);
	}
</style>
