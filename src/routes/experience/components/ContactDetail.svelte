<script lang="ts">
	import type { ContactInformation } from '../../../lib/resumes/v1';
	export let contact: ContactInformation;
</script>

{#if contact.type === 'email'}
	<a href={`mailto:${contact.value}`} class="flex flex-row items-center justify-start gap-2">
		<i class="fas fa-envelope fa-lg w-10 text-center" />
		<span>{contact.value}</span>
	</a>
{:else if contact.type === 'phone'}
	<div class="flex flex-row items-center justify-start gap-2">
		<i class="fas fa-phone fa-lg w-10 text-center" />
		<span>{contact.value}</span>
	</div>
{:else if contact.type === 'website'}
	<a href={contact.value} class="flex flex-row items-center justify-start gap-2">
		<i class="fas fa-globe fa-lg w-10 text-center" />
		<span>{contact.value}</span>
	</a>
{:else if contact.type === 'linkedin'}
	<a href={contact.value} class="flex flex-row items-center justify-start gap-2">
		<i class="fab fa-linkedin fa-lg w-10 text-center" />
		<span>{contact.value}</span>
	</a>
{/if}
