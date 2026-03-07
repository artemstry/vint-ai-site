<script lang="ts">
	let { logos }: { logos: Array<{ src: string; alt: string }> } = $props();
	const ticker = $derived([...logos, ...logos]);
</script>

<div class="overflow-hidden rounded-2xl border border-[#ff8e96]/20 bg-[#080f1f]/80 py-4">
	<div class="ticker-track">
		{#each ticker as logo, idx}
			<div class="ticker-item" aria-hidden={idx >= logos.length}>
				<img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" width="64" height="24" />
			</div>
		{/each}
	</div>
</div>

<style>
	.ticker-track {
		display: flex;
		gap: 2.2rem;
		width: max-content;
		animation: slide 20s linear infinite;
	}

	.ticker-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 104px;
		opacity: 0.92;
		filter: saturate(0.95) brightness(1.06);
	}

	.ticker-item img {
		height: 24px;
		width: auto;
		border-radius: 6px;
	}

	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
