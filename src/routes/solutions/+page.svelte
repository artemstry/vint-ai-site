<script lang="ts">
	import HeroAnimation from '$lib/components/HeroAnimation.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import { Blocks, BrainCircuit, Handshake, ShieldPlus } from 'lucide-svelte';

	const items = [
		{
			title: 'Healthcare and Life Sciences (HLS)',
			description:
				'Securely process sensitive patient data while meeting HIPAA, HITRUST, GDPR, and enterprise security standards.',
			points: ['Sensitive data modeling', 'Compliant data pipelines', 'Privacy-aware analytics'],
			icon: ShieldPlus
		},
		{
			title: 'Full Customer Experience Service',
			description:
				'End-to-end engagement from discovery to support, with clear documentation and continuous optimization.',
			points: ['Discovery to production', 'Operational support', 'Continuous iteration'],
			icon: Handshake
		},
		{
			title: 'Versatility in Application',
			description:
				'From healthcare to finance and beyond, we shape platform architecture to your domain and business model.',
			points: ['Cross-industry delivery', 'Integration across systems', 'Flexible architecture patterns'],
			icon: Blocks
		},
		{
			title: 'Data Science Acceleration',
			description:
				'Transform complex datasets into predictive, real-world action with scalable ML workflows and robust MLOps.',
			points: ['Feature and model pipelines', 'NLP and predictive systems', 'MLOps and monitoring'],
			icon: BrainCircuit
		}
	];
</script>

<svelte:head>
	<title>VINT.AI Solutions | Data and AI Services</title>
</svelte:head>

<section class="relative section overflow-hidden border-b border-white/10">
	<div class="particles-bg" aria-hidden="true"></div>
	<HeroAnimation points={320} particleSize={0.095} particleOpacity={0.96} canvasOpacity={0.95} speedMultiplier={1.35} />
	<div class="container relative z-10">
		<ScrollReveal>
			{#snippet children()}
				<p class="section-eyebrow">Solutions</p>
				<h1 class="mt-3 text-4xl font-bold md:text-5xl">Dive into the new age of data with AI</h1>
				<p class="mt-5 max-w-2xl text-slate-300">
					Practical, enterprise-ready solutions designed to improve decision speed, trust, and operational
					agility.
				</p>
			{/snippet}
		</ScrollReveal>
	</div>
</section>

<section class="relative section overflow-hidden">
	<div class="cards-particles-bg" aria-hidden="true"></div>
	<div class="container relative z-10 grid gap-5 md:grid-cols-2 md:auto-rows-fr">
		{#each items as item}
			<ScrollReveal y={18}>
				{#snippet children()}
					<article
						class="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff8e96]/55"
					>
						<div class="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#d95262]/16 blur-2xl"></div>
						<div class="relative flex h-full flex-col">
							<div class="inline-flex rounded-lg bg-[#d95262]/14 p-2.5 text-[#ff9ea6]">
								<item.icon size={22} />
							</div>
							<h2 class="mt-4 text-2xl font-semibold">{item.title}</h2>
							<p class="mt-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
							<ul class="mt-4 space-y-2 text-sm text-[#ffb5bb]">
								{#each item.points as point}
									<li class="before:mr-2 before:text-[#ff8e96] before:content-['•']">{point}</li>
								{/each}
							</ul>
						</div>
					</article>
				{/snippet}
			</ScrollReveal>
		{/each}
	</div>
</section>

<style>
	.particles-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 18% 22%, rgba(217, 82, 98, 0.17), transparent 34%),
			radial-gradient(circle at 82% 15%, rgba(92, 102, 128, 0.22), transparent 36%),
			radial-gradient(circle at 50% 80%, rgba(120, 127, 150, 0.16), transparent 40%);
		animation: pulseShift 11s ease-in-out infinite alternate;
	}

	.particles-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(circle, rgba(217, 82, 98, 0.55) 0.8px, transparent 1.1px),
			radial-gradient(circle, rgba(160, 168, 185, 0.33) 0.8px, transparent 1.1px);
		background-size:
			160px 160px,
			220px 220px;
		background-position:
			0 0,
			40px 60px;
		opacity: 0.33;
		animation: drift 18s linear infinite;
	}

	.cards-particles-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 12% 78%, rgba(217, 82, 98, 0.2), transparent 34%),
			radial-gradient(circle at 88% 24%, rgba(156, 167, 194, 0.2), transparent 35%),
			linear-gradient(180deg, rgba(9, 12, 21, 0.36), rgba(9, 12, 21, 0.12));
		animation: pulseShift 10s ease-in-out infinite alternate-reverse;
	}

	.cards-particles-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(circle, rgba(217, 82, 98, 0.72) 1.45px, transparent 1.9px),
			radial-gradient(circle, rgba(176, 185, 204, 0.5) 1.35px, transparent 1.8px);
		background-size:
			165px 165px,
			235px 235px;
		background-position:
			0 0,
			30px 45px;
		opacity: 0.5;
		animation: driftGrid 18s linear infinite;
	}

	.cards-particles-bg::after {
		content: '';
		position: absolute;
		inset: -20% -10%;
		background:
			radial-gradient(circle at 18% 42%, rgba(217, 82, 98, 0.18), transparent 46%),
			radial-gradient(circle at 78% 64%, rgba(255, 159, 170, 0.12), transparent 42%);
		filter: blur(30px);
		opacity: 0.65;
		animation: glowSweep 13s ease-in-out infinite alternate;
	}

	@keyframes drift {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-60px, 35px, 0);
		}
	}

	@keyframes driftGrid {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(95px, -42px, 0);
		}
	}

	@keyframes glowSweep {
		from {
			transform: translate3d(-18px, 0, 0) scale(1);
		}
		to {
			transform: translate3d(24px, -12px, 0) scale(1.05);
		}
	}

	@keyframes pulseShift {
		from {
			filter: saturate(0.9);
		}
		to {
			filter: saturate(1.12);
		}
	}
</style>
