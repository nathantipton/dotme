<script>
	import '@fontsource/montserrat';
	import '@fontsource/open-sans';
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

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
</svelte:head>

<div class="dark:bg-zinc-950 content min-h-safe min-w-full">
	<slot />
</div>

<style lang="postcss">
	.content {
		background-color: hsla(240, 10%, 3%, 1);
		background-image: radial-gradient(at 63% 65%, hsla(17, 87%, 40%, 0.09) 0px, transparent 50%),
			radial-gradient(at 40% 50%, hsla(240, 3%, 15%, 0.48) 0px, transparent 50%);
	}
</style>