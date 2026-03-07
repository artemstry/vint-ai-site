<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let { value, label, suffix = '' }: { value: number; label: string; suffix?: string } = $props();

	const animated = tweened(0, { duration: 1200, easing: cubicOut });
	let root: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					animated.set(value);
					observer.disconnect();
				}
			},
			{ threshold: 0.45 }
		);
		observer.observe(root);
		return () => observer.disconnect();
	});

	const format = (n: number) => Math.round(n).toLocaleString();
</script>

<div bind:this={root} class="glass rounded-2xl p-6 text-center">
	<p class="font-['Space_Grotesk'] text-4xl font-bold text-[#ff8e96]">
		{format($animated)}{suffix}
	</p>
	<p class="mt-2 text-sm text-slate-300">{label}</p>
</div>
