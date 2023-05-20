<script lang="ts">
	import type { ContactInformation } from '../../../lib/resumes/v1';
	export let contact: ContactInformation;
</script>

<div class="flex flex-col items-start justify-start">
	{#if contact.type === 'email'}
		<a
			href={`mailto:${contact.value}`}
			class="flex-reverse flex items-center justify-start text-sm"
		>
			<i class="fas fa-envelope w-10 text-center" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{:else if contact.type === 'phone'}
		<div class="flex-reverse flex items-center justify-start text-sm">
			<i class="fas fa-phone w-10 text-center" />
			<span class="hidden md:flex">{contact.value}</span>
		</div>
	{:else if contact.type === 'website'}
		<a href={contact.value} class="flex-reverse flex items-center justify-start text-sm">
			<i class="fas fa-globe w-10 text-center" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{:else if contact.type === 'linkedin'}
		<a href={contact.value} class="flex-reverse flex items-center justify-start text-sm">
			<i class="fab fa-linkedin w-10 text-center" />
			<span class="hidden md:flex">{contact.value}</span>
		</a>
	{/if}
</div>
