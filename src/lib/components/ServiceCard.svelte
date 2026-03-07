<script lang="ts">
	let {
		title,
		description,
		icon
	}: { title: string; description: string; icon: any } = $props();
	const Icon = $derived(icon);
</script>

<article class="glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
	<div class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl"></div>
	<div class="relative space-y-4">
		<div class="inline-flex rounded-lg bg-cyan-500/15 p-2 text-cyan-300">
			<Icon size={18} />
		</div>
		<h3 class="text-xl font-semibold">{title}</h3>
		<p class="text-sm leading-relaxed text-slate-300">{description}</p>
	</div>
</article>
