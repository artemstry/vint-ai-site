<script lang="ts">
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>Get Started | VINT.AI</title>
</svelte:head>

<section class="section border-b border-white/10">
	<div class="container">
		<p class="section-eyebrow">Get Started</p>
		<h1 class="mt-3 text-4xl font-bold md:text-5xl">Let&apos;s give your business what it needs to grow</h1>
		<p class="mt-5 max-w-2xl text-slate-300">
			Share your goals, platform context, and priorities. We&apos;ll follow up with a practical engagement
			plan.
		</p>
	</div>
</section>

<section class="section">
	<div class="container grid gap-8 md:grid-cols-[1fr_0.85fr]">
		<form method="POST" class="glass rounded-2xl p-6 md:p-8">
			<div class="grid gap-4 sm:grid-cols-2">
				<label class="space-y-2 text-sm">
					<span class="text-slate-200">First name</span>
					<input
						required
						name="firstName"
						class="w-full rounded-lg border border-white/15 bg-slate-950/40 px-4 py-2.5 text-slate-100 outline-none ring-[#ff8e96] transition focus:ring-2"
					/>
				</label>
				<label class="space-y-2 text-sm">
					<span class="text-slate-200">Last name</span>
					<input
						required
						name="lastName"
						class="w-full rounded-lg border border-white/15 bg-slate-950/40 px-4 py-2.5 text-slate-100 outline-none ring-[#ff8e96] transition focus:ring-2"
					/>
				</label>
			</div>
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				<label class="space-y-2 text-sm">
					<span class="text-slate-200">Email</span>
					<input
						required
						type="email"
						name="email"
						class="w-full rounded-lg border border-white/15 bg-slate-950/40 px-4 py-2.5 text-slate-100 outline-none ring-[#ff8e96] transition focus:ring-2"
					/>
				</label>
				<label class="space-y-2 text-sm">
					<span class="text-slate-200">Company</span>
					<input
						required
						name="company"
						class="w-full rounded-lg border border-white/15 bg-slate-950/40 px-4 py-2.5 text-slate-100 outline-none ring-[#ff8e96] transition focus:ring-2"
					/>
				</label>
			</div>
			<label class="mt-4 block space-y-2 text-sm">
				<span class="text-slate-200">How can we help?</span>
				<textarea
					required
					name="message"
					rows="5"
					class="w-full rounded-lg border border-white/15 bg-slate-950/40 px-4 py-3 text-slate-100 outline-none ring-[#ff8e96] transition focus:ring-2"
				></textarea>
			</label>

			{#if form?.error}
				<p class="mt-4 text-sm text-red-300">{form.error}</p>
			{/if}
			{#if form?.success}
				<p class="mt-4 text-sm text-emerald-300">{form.success}</p>
			{/if}

			<button
				type="submit"
				class="mt-6 rounded-full bg-[#d95262] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e06272]"
			>
				Submit
			</button>
		</form>

		<aside class="space-y-4">
			<div class="glass rounded-2xl p-6">
				<h2 class="text-xl font-semibold">What happens next?</h2>
				<p class="mt-3 text-sm text-slate-300">
					We review your submission and set up a focused discovery call to map business outcomes to an
					implementable data and AI roadmap.
				</p>
			</div>
			<div class="glass rounded-2xl p-6">
				<h2 class="text-xl font-semibold">Prefer chat?</h2>
				<p class="mt-3 text-sm text-slate-300">
					Enable Tawk.to in your environment variables and visitors can message your team instantly from
					any page.
				</p>
			</div>
		</aside>
	</div>
</section>
