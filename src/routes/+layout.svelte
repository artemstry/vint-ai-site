<script lang="ts">
	import '../app.css';
	import ChatWidget from '$lib/components/ChatWidget.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logos/vint-icon.png" />
	<meta name="description" content="VINT.AI helps enterprises solve data strategy, engineering, governance, and AI operations with speed and reliability." />
	<meta property="og:title" content="VINT.AI - Solve Data and AI" />
	<meta property="og:description" content="Modern data and AI consulting for cloud analytics, governance, and scalable delivery." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logos/vint-logo.png" />
</svelte:head>

<div class="min-h-screen">
	<Navbar />
	<main>{@render children()}</main>
	<Footer />
</div>

<ChatWidget />
