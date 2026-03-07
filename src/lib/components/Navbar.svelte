<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/state';
	import { navItems } from '$lib/data/site';

	let mobileOpen = $state(false);
</script>

<header class="sticky top-0 z-50 border-b border-white/10 bg-[#05060bcc] backdrop-blur-lg">
	<div class="container flex h-18 items-center justify-between gap-4">
		<a href="/" class="flex items-center gap-3 font-semibold tracking-wide">
			<img src="/logos/vint-logo.svg" alt="VINT.AI logo" class="h-12 w-auto" />
		</a>

		<nav class="hidden items-center gap-7 md:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class={`text-sm transition-colors duration-200 ${
						page.url.pathname === item.href
							? 'text-[#ff8e96]'
							: 'text-slate-300 hover:text-[#ff9ea6]'
					}`}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<a
			href="/get-started"
			class="hidden rounded-full bg-[#9f263b] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#b7334b] md:inline-flex"
		>
			Talk to us
		</a>

		<button
			type="button"
			class="inline-flex rounded-lg border border-white/15 p-2 text-slate-200 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<X size={18} />
			{:else}
				<Menu size={18} />
			{/if}
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-white/10 bg-[#070c1ae8] md:hidden">
			<div class="container flex flex-col gap-4 py-4">
				{#each navItems as item}
					<a
						href={item.href}
						class="text-sm text-slate-200"
						onclick={() => (mobileOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
