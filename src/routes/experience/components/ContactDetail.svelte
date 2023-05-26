<script lang="ts">
	import type { contact_information } from '@prisma/client';

	export let contact: contact_information;
</script>

<div class="flex flex-col items-start justify-start">
	{#if contact.type === 'email'}
		<a
			href={`mailto:${contact.value}`}
			class="flex-reverse flex items-center justify-start text-sm text-zinc-700 dark:text-zinc-400"
		>
			<i class="fas fa-envelope w-10 text-center text-zinc-800 dark:text-zinc-200" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{:else if contact.type === 'phone'}
		<a
			href={`tel:${contact.value}`}
			class="flex-reverse flex items-center justify-start text-sm text-zinc-700 dark:text-zinc-400"
		>
			<i class="fas fa-phone w-10 text-center text-zinc-800 dark:text-zinc-200" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{:else if contact.type === 'website'}
		<a
			href={contact.value}
			class="flex-reverse flex items-center justify-start text-sm text-zinc-700 dark:text-zinc-400"
		>
			<i class="fas fa-globe w-10 text-center text-zinc-800 dark:text-zinc-200" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{:else if contact.type === 'linkedin'}
		<a
			href={contact.value}
			class="flex-reverse flex items-center justify-start text-sm text-zinc-700 dark:text-zinc-400"
		>
			<i class="fab fa-linkedin w-10 text-center text-zinc-800 dark:text-zinc-200" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{/if}
</div>
