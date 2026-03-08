<script lang="ts">
	import { onMount } from 'svelte';
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

	const solutionsHeroBg =
		'https://static.wixstatic.com/media/c837a6_3f53cdbff83b47b19a97bd35c767333c~mv2.jpg/v1/fill/w_3495,h_2160,al_c,q_90,enc_avif,quality_auto/c837a6_3f53cdbff83b47b19a97bd35c767333c~mv2.jpg';

	let heroSection: HTMLElement;
	let cardsSection: HTMLElement;

	const setPointer = (target: HTMLElement, event: PointerEvent) => {
		const rect = target.getBoundingClientRect();
		if (!rect.width || !rect.height) return;
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;
		target.style.setProperty('--pointer-x', `${Math.max(0, Math.min(100, x)).toFixed(2)}%`);
		target.style.setProperty('--pointer-y', `${Math.max(0, Math.min(100, y)).toFixed(2)}%`);
	};

	const resetPointer = (target: HTMLElement) => {
		target.style.setProperty('--pointer-x', '50%');
		target.style.setProperty('--pointer-y', '50%');
	};

	onMount(() => {
		resetPointer(heroSection);
		resetPointer(cardsSection);

		const handlePointerMove = (event: PointerEvent) => {
			setPointer(heroSection, event);
			setPointer(cardsSection, event);
		};
		const handlePointerLeave = () => {
			resetPointer(heroSection);
			resetPointer(cardsSection);
		};

		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('pointerleave', handlePointerLeave);

		return () => {
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('pointerleave', handlePointerLeave);
		};
	});
</script>

<svelte:head>
	<title>VINT.AI Solutions | Data and AI Services</title>
</svelte:head>

<section
	class="relative section overflow-hidden border-b border-white/10"
	bind:this={heroSection}
>
	<div class="solutions-photo-bg" style={`background-image: url('${solutionsHeroBg}');`} aria-hidden="true"></div>
	<div class="particles-bg" aria-hidden="true"></div>
	<HeroAnimation
		points={420}
		particleSize={0.16}
		particleOpacity={0.96}
		canvasOpacity={0.98}
		speedMultiplier={1.15}
		attractToPointer={true}
		attractStrength={0.0022}
		chaos={0.00025}
		cameraDistance={16}
		fitViewport={true}
		viewportWidthFactor={1.24}
		viewportHeightFactor={0.96}
		spreadZ={8}
	/>
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

<section
	class="relative section overflow-hidden"
	bind:this={cardsSection}
>
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
	.solutions-photo-bg {
		position: absolute;
		inset: -6%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.18;
		filter: saturate(1.08);
		transform: scale(1.06);
	}

	.particles-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 18% 22%, rgba(217, 82, 98, 0.24), transparent 36%),
			radial-gradient(circle at 82% 15%, rgba(92, 102, 128, 0.24), transparent 37%),
			radial-gradient(circle at 50% 80%, rgba(120, 127, 150, 0.2), transparent 42%),
			linear-gradient(180deg, rgba(8, 11, 18, 0.2), rgba(8, 11, 18, 0.52));
		animation: pulseShift 11s ease-in-out infinite alternate;
	}

	.particles-bg::before {
		content: '';
		position: absolute;
		inset: -4%;
		background:
			radial-gradient(circle at 7% 20%, rgba(233, 101, 116, 0.58) 1px, transparent 2px),
			radial-gradient(circle at 12% 67%, rgba(178, 189, 214, 0.38) 1px, transparent 2px),
			radial-gradient(circle at 20% 43%, rgba(217, 82, 98, 0.43) 1.2px, transparent 2.1px),
			radial-gradient(circle at 31% 16%, rgba(188, 202, 231, 0.33) 1px, transparent 2px),
			radial-gradient(circle at 37% 72%, rgba(255, 169, 178, 0.42) 1.2px, transparent 2.3px),
			radial-gradient(circle at 46% 34%, rgba(166, 178, 205, 0.32) 1.1px, transparent 2.1px),
			radial-gradient(circle at 58% 61%, rgba(230, 120, 132, 0.5) 1.2px, transparent 2.2px),
			radial-gradient(circle at 63% 24%, rgba(170, 185, 214, 0.38) 1px, transparent 2px),
			radial-gradient(circle at 74% 78%, rgba(236, 130, 142, 0.46) 1.2px, transparent 2.4px),
			radial-gradient(circle at 83% 37%, rgba(182, 191, 212, 0.34) 1px, transparent 2.1px),
			radial-gradient(circle at 92% 52%, rgba(224, 99, 113, 0.52) 1.1px, transparent 2.2px);
		opacity: 0.18;
		filter: blur(0.3px);
		animation: driftChaos 16s ease-in-out infinite alternate;
	}

	.particles-bg::after {
		content: '';
		position: absolute;
		inset: -10%;
		background: radial-gradient(
			280px circle at var(--pointer-x, 50%) var(--pointer-y, 50%),
			rgba(236, 106, 119, 0.28),
			rgba(236, 106, 119, 0.06) 42%,
			transparent 72%
		);
		opacity: 0.86;
		filter: blur(8px);
		transition: background 130ms linear;
	}

	.cards-particles-bg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 12% 78%, rgba(217, 82, 98, 0.24), transparent 35%),
			radial-gradient(circle at 88% 24%, rgba(156, 167, 194, 0.24), transparent 37%),
			linear-gradient(180deg, rgba(9, 12, 21, 0.36), rgba(9, 12, 21, 0.12));
		animation: pulseShift 10s ease-in-out infinite alternate-reverse;
	}

	.cards-particles-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 8% 35%, rgba(217, 82, 98, 0.63) 1.5px, transparent 2.2px),
			radial-gradient(circle at 16% 63%, rgba(176, 185, 204, 0.44) 1.35px, transparent 2px),
			radial-gradient(circle at 22% 18%, rgba(217, 82, 98, 0.54) 1.5px, transparent 2.2px),
			radial-gradient(circle at 31% 58%, rgba(176, 185, 204, 0.42) 1.35px, transparent 2px),
			radial-gradient(circle at 44% 28%, rgba(217, 82, 98, 0.58) 1.45px, transparent 2.15px),
			radial-gradient(circle at 53% 72%, rgba(176, 185, 204, 0.46) 1.35px, transparent 2px),
			radial-gradient(circle at 67% 41%, rgba(217, 82, 98, 0.54) 1.5px, transparent 2.2px),
			radial-gradient(circle at 75% 14%, rgba(176, 185, 204, 0.44) 1.35px, transparent 2px),
			radial-gradient(circle at 82% 66%, rgba(217, 82, 98, 0.58) 1.45px, transparent 2.2px),
			radial-gradient(circle at 92% 30%, rgba(176, 185, 204, 0.42) 1.35px, transparent 2px);
		opacity: 0.58;
		animation: driftChaos 18s ease-in-out infinite alternate-reverse;
	}

	.cards-particles-bg::after {
		content: '';
		position: absolute;
		inset: -20% -10%;
		background:
			radial-gradient(circle at 18% 42%, rgba(217, 82, 98, 0.18), transparent 46%),
			radial-gradient(circle at 78% 64%, rgba(255, 159, 170, 0.14), transparent 42%),
			radial-gradient(
				280px circle at var(--pointer-x, 50%) var(--pointer-y, 50%),
				rgba(240, 132, 143, 0.2),
				transparent 72%
			);
		filter: blur(30px);
		opacity: 0.65;
		animation: glowSweep 13s ease-in-out infinite alternate;
	}

	@keyframes driftChaos {
		from {
			transform: translate3d(-24px, 8px, 0) scale(1.01) rotate(0deg);
		}
		to {
			transform: translate3d(24px, -18px, 0) scale(1.03) rotate(1deg);
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
