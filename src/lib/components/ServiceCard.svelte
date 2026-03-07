<script lang="ts">
	let {
		title,
		description,
		icon,
		iconSrc,
		iconAlt
	}: {
		title: string;
		description: string;
		icon?: any;
		iconSrc?: string;
		iconAlt?: string;
	} = $props();
	const Icon = $derived(icon);
</script>

<article class="glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff8e96]/50">
	<div class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ff6f79]/18 blur-2xl"></div>
	<div class="relative space-y-4">
		<div class="inline-flex h-12 items-center rounded-lg bg-[#ff6f79]/14 px-2.5">
			{#if Icon}
				<Icon size={24} />
			{:else if iconSrc}
				<img src={iconSrc} alt={iconAlt ?? `${title} icon`} class="h-7 w-auto object-contain" loading="lazy" />
			{/if}
		</div>
		<h3 class="text-xl font-semibold">{title}</h3>
		<p class="text-sm leading-relaxed text-slate-300">{description}</p>
	</div>
</article>
