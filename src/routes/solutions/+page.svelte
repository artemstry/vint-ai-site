<script lang="ts">
	const items = [
		{
			title: 'Healthcare and Life Sciences (HLS)',
			description:
				'Securely process sensitive patient data while meeting HIPAA, HITRUST, GDPR, and enterprise security standards.',
			points: ['Sensitive data modeling', 'Compliant data pipelines', 'Privacy-aware analytics']
		},
		{
			title: 'Data Science Acceleration',
			description:
				'Transform complex datasets into predictive, real-world action with scalable ML workflows and robust MLOps.',
			points: ['Feature and model pipelines', 'NLP and predictive systems', 'MLOps and monitoring']
		},
		{
			title: 'Versatility in Application',
			description:
				'From healthcare to finance and beyond, we shape platform architecture to your domain and business model.',
			points: ['Cross-industry delivery', 'Integration across systems', 'Flexible architecture patterns']
		},
		{
			title: 'Full Customer Experience Service',
			description:
				'End-to-end engagement from discovery to support, with clear documentation and continuous optimization.',
			points: ['Discovery to production', 'Operational support', 'Continuous iteration']
		}
	];
</script>

<svelte:head>
	<title>VINT.AI Solutions | Data and AI Services</title>
</svelte:head>

<section class="section border-b border-white/10">
	<div class="container">
		<p class="section-eyebrow">Solutions</p>
		<h1 class="mt-3 text-4xl font-bold md:text-5xl">Dive into the new age of data with AI</h1>
		<p class="mt-5 max-w-2xl text-slate-300">
			Practical, enterprise-ready solutions designed to improve decision speed, trust, and operational
			agility.
		</p>
	</div>
</section>

<section class="section">
	<div class="container grid gap-5 md:grid-cols-2">
		{#each items as item}
			<article class="glass rounded-2xl p-6">
				<h2 class="text-2xl font-semibold">{item.title}</h2>
				<p class="mt-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
				<ul class="mt-4 space-y-2 text-sm text-cyan-200">
					{#each item.points as point}
						<li class="before:mr-2 before:text-cyan-400 before:content-['•']">{point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
