<script lang="ts">
	let { logos }: { logos: Array<{ src: string; alt: string }> } = $props();
	const ticker = $derived([...logos, ...logos]);
</script>

<div class="overflow-hidden rounded-2xl border border-white/10 bg-[#080f1f]/80 py-5">
	<div class="ticker-track">
		{#each ticker as logo, idx}
			<div class="ticker-item" aria-hidden={idx >= logos.length}>
				<img src={logo.src} alt={logo.alt} loading="lazy" />
			</div>
		{/each}
	</div>
</div>

<style>
	.ticker-track {
		display: flex;
		gap: 3rem;
		width: max-content;
		animation: slide 24s linear infinite;
	}

	.ticker-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 120px;
		opacity: 0.8;
		filter: grayscale(1) brightness(1.2);
	}

	.ticker-item img {
		height: 28px;
		width: auto;
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
