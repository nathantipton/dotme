<script lang="ts">
	import MessageComponent from './Message.svelte';
	import autoAnimate from '@formkit/auto-animate';

	import { onMount, tick } from 'svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { writable } from 'svelte/store';
	import type { Message } from '$lib/models/chat';
	import { fade, fly } from 'svelte/transition';
	import { logAnalyticsEvent } from '$lib/firebase';

	export let data: PageData;

	const { form, enhance, constraints, errors } = superForm(data.form, {
		onSubmit: ({ formData }) => {
			addMessage(formData.get('question') as string);
			logAnalyticsEvent('chat_question_asked', {
				question: formData.get('question') as string
			});
			scrollToBottom();
			thinking = true;
		},
		onResult({ result, formEl }) {
			if (result.type === 'error') {
				removeLastMessage();
			} else if (result.type === 'success' && result.data?.response) {
				addMessage(result.data.response.response, true);
				scrollToBottom();
			}
			thinking = false;
			formEl.reset();
		},
		onError: (error) => {
			console.log('onError', error);
			removeLastMessage();
			thinking = false;
			// addMessage(error, true);
			// scrollToBottom();
		}
	});
	const initialMessage = {
		message: 'Hello! I am NateGippity. Ask me anything about Nathan!',
		name: 'NateGippity',
		isBot: true
	};

	let thinking = true;
	const messages = writable<Message[]>([]);
	let messagesContainer: HTMLDivElement;

	const addMessage = (message: string, isBot: boolean = false) => {
		messages.update((messages) => [
			...messages,
			{
				message,
				name: isBot ? 'NateGippity' : 'You',
				isBot
			}
		]);
	};

	const removeLastMessage = () => {
		messages.update((messages) => messages.slice(0, messages.length - 1));
	};

	const scrollToBottom = async () => {
		await tick();
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}
	};

	onMount(() => {
		const initialMessageTimeout = setTimeout(() => {
			addMessage(initialMessage.message, initialMessage.isBot);
			scrollToBottom();
			clearTimeout(initialMessageTimeout);
		}, 100);

		return () => clearTimeout(initialMessageTimeout);
	});
</script>

<main
	class="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-col items-stretch justify-start bg-opacity-30 px-4 dark:bg-zinc-900 md:px-0"
>
	<div class="container relative mx-auto flex h-full max-w-2xl flex-col">
		<div
			id="messages-container"
			bind:this={messagesContainer}
			class="my-4 flex flex-1 flex-col items-stretch justify-start gap-8 overflow-y-auto md:py-8"
			use:autoAnimate
		>
			{#each $messages as message}
				<MessageComponent {message} />
			{/each}
		</div>
		<div class="relative flex flex-col items-stretch justify-end">
			{#if thinking}
				<div class="h-8 overflow-hidden absolute -top-8 left-0" in:fly={{ y: 20, duration: 200 }} out:fade>
					<div class="flex flex-row items-center justify-start gap-2">
						<img
							src="/ai-avatar.webp"
							alt="Avatar for NateGippity"
							class="avatar h-10 w-10 rounded-full"
						/>
						<p class="text-xs">
							<span class="font-bold">NateGippity</span> is thinking...
						</p>
					</div>
				</div>
			{/if}
			<form
				action="?/query"
				method="POST"
				use:enhance
				class="z-50 flex flex-row items-center justify-start gap-4"
			>
				<input
					type="text"
					name="question"
					id="question"
					class="input flex-1"
					placeholder="Ask me anything about Nathan"
					{...$constraints.question}
					aria-invalid={$errors.question ? 'true' : undefined}
				/>
				<button class="btn" type="submit">Send</button>
			</form>
		</div>
		<p class="py-4 text-center text-xs">
			This is a work in progress and I'm still making adjustments with the model. Please check my <a
				class="link"
				href="/experience">experience</a
			>
			page for updated details or my <a class="link" href="/projects/portfolio">project</a> page for
			how I built this.
		</p>
	</div>
</main>

<style>
	#messages-container {
		scroll-behavior: smooth;
	}
</style>
