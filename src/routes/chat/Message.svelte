<script lang="ts">
	import type { Message } from '$lib/models/chat';
	import SvelteMarkdown from 'svelte-markdown';
	export let message: Message;
	const NateGippity_AVATAR = '/ai-avatar.webp';
</script>

<div class="flex flex-row items-start justify-start gap-4 text-sm">
	<div class="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-base-300">
		{#if message.photoUrl || message.isBot}
			<img
				src={message.photoUrl ?? NateGippity_AVATAR}
				alt={`Avatar for ${message.name}`}
				class="h-10 w-10 rounded-full"
			/>
		{:else}
			<i class="fa-solid {message.isBot ? 'fa-robot' : 'fa-user'} fa-lg" />
		{/if}
	</div>
	<div class="flex flex-1 flex-col items-stretch justify-start">
		<div class="font-bold">{message.name}</div>
		<div class="pr-4">
			<SvelteMarkdown source={message.message} />
		</div>
	</div>
</div>
