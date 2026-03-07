<script lang="ts">
	import HeroAnimation from '$lib/components/HeroAnimation.svelte';
	import PartnerLogos from '$lib/components/PartnerLogos.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import StatsCounter from '$lib/components/StatsCounter.svelte';
	import { partnerLogos, services, stats } from '$lib/data/site';
</script>

<svelte:head>
	<title>VINT.AI | Solve Data and AI</title>
</svelte:head>

<section class="relative overflow-hidden border-b border-white/10 py-22 md:py-28">
	<div class="absolute inset-0">
		<div
			class="h-full w-full bg-cover bg-center opacity-38"
			style="background-image: url('/hero-bg.jpg');"
		></div>
		<div class="absolute inset-0 bg-[#07090f]/68"></div>
	</div>
	<HeroAnimation />
	<div class="container relative z-10 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
		<div>
			<p class="section-eyebrow text-base md:text-lg">Solve Data and AI</p>
			<h1 class="mt-3 text-5xl font-bold leading-tight md:text-7xl">
				Operationalize AI across the enterprise.
			</h1>
			<p class="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
				We build the machine-accessible layer that connects your data, tools, and workflows so AI can
				execute reliably in production.
			</p>
			<p class="mt-3 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
				From customer service automation to governed enterprise copilots, we turn AI strategy into
				operational systems.
			</p>
			<div class="mt-9 flex flex-wrap items-center gap-3">
				<a
					href="/get-started"
					class="rounded-full bg-[#9f263b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b7334b]"
				>
					Get Started
				</a>
				<a
					href="/solutions"
					class="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-[#ff9ea6] hover:text-[#ffb1b8]"
				>
					Explore Solutions
				</a>
			</div>
		</div>
		<div class="glass rounded-3xl p-6 md:p-8">
			<p class="text-sm uppercase tracking-[0.18em] text-[#ff9ea6]">Why Teams Choose VINT.AI</p>
			<ul class="mt-4 space-y-4 text-sm text-slate-200">
				<li class="border-b border-white/10 pb-3">Production AI operating model, not just pilots</li>
				<li class="border-b border-white/10 pb-3">Customer service automation and agent workflows</li>
				<li class="border-b border-white/10 pb-3">Machine-accessible systems with governed data access</li>
				<li>Senior architects with 15+ years of enterprise delivery</li>
			</ul>
		</div>
	</div>
</section>

<section class="section">
	<div class="container space-y-7">
		<ScrollReveal>
			{#snippet children()}
				<div class="space-y-3">
					<p class="section-eyebrow">Our Partners</p>
					<h2 class="section-title">Integrated with your modern ecosystem</h2>
				</div>
			{/snippet}
		</ScrollReveal>
		<PartnerLogos logos={partnerLogos} />
	</div>
</section>

<section class="section border-y border-white/10 bg-[#060d1b]/55">
	<div class="container space-y-10">
		<ScrollReveal>
			{#snippet children()}
				<div class="space-y-3">
					<p class="section-eyebrow">Services</p>
					<h2 class="section-title">From strategy to production execution</h2>
				</div>
			{/snippet}
		</ScrollReveal>

		<div class="grid gap-5 md:grid-cols-2">
			{#each services as service}
				<ScrollReveal y={20}>
					{#snippet children()}
						<ServiceCard {...service} />
					{/snippet}
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container space-y-10">
		<ScrollReveal>
			{#snippet children()}
				<div class="space-y-3">
					<p class="section-eyebrow">Impact</p>
					<h2 class="section-title">Unprecedented velocity. Impeccable reliability.</h2>
				</div>
			{/snippet}
		</ScrollReveal>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
			{#each stats as stat}
				<StatsCounter {...stat} />
			{/each}
		</div>
	</div>
</section>

<section class="section border-y border-white/10 bg-[#080f1f]/50">
	<div class="container grid gap-8 md:grid-cols-2">
		<ScrollReveal>
			{#snippet children()}
				<div class="space-y-4">
					<p class="section-eyebrow">Mission</p>
					<h2 class="section-title">Data outcomes over complexity and overhead</h2>
					<p class="text-slate-300">
						We champion swift, expert, and affordable data solutions that power your business forward.
						Our teams are built from practitioners who have led enterprise platforms as CTO, CIO, and CDO
						leaders.
					</p>
				</div>
			{/snippet}
		</ScrollReveal>

		<ScrollReveal>
			{#snippet children()}
				<div class="glass rounded-2xl p-6">
					<p class="text-sm uppercase tracking-[0.15em] text-[#ff9ea6]">Leadership DNA</p>
					<p class="mt-4 text-sm leading-relaxed text-slate-300">
						Every delivery stream is guided by architects with 15+ years in technology and computer
						science, driving measurable outcomes in regulated industries.
					</p>
				</div>
			{/snippet}
		</ScrollReveal>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="glass rounded-3xl p-8 text-center md:p-12">
			<p class="section-eyebrow">Ready to Accelerate?</p>
			<h2 class="mx-auto mt-3 max-w-2xl text-3xl font-bold md:text-5xl">
				Let&apos;s build your modern data and AI platform.
			</h2>
			<a
				href="/get-started"
				class="mt-7 inline-flex rounded-full bg-[#9f263b] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#b7334b]"
			>
				Start the conversation
			</a>
		</div>
	</div>
</section>
