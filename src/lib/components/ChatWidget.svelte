<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		const propertyId = env.PUBLIC_TAWK_PROPERTY_ID;
		const widgetId = env.PUBLIC_TAWK_WIDGET_ID;
		if (!browser || !propertyId || !widgetId) return;

		const script = document.createElement('script');
		script.async = true;
		script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
		script.charset = 'UTF-8';
		script.setAttribute('crossorigin', '*');
		document.body.append(script);

		return () => {
			script.remove();
		};
	});
</script>
