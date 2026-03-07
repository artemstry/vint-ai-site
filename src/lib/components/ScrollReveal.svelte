<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let {
		y = 16,
		duration = 450,
		threshold = 0.2,
		children
	}: {
		y?: number;
		duration?: number;
		threshold?: number;
		children: import('svelte').Snippet;
	} = $props();

	let shown = $state(false);
	let host: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					shown = true;
					observer.disconnect();
				}
			},
			{ threshold }
		);
		observer.observe(host);
		return () => observer.disconnect();
	});
</script>

<div bind:this={host}>
	{#if shown}
		<div in:fly={{ y, duration, easing: cubicOut }}>
			{@render children()}
		</div>
	{/if}
</div>
