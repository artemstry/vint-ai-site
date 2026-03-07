import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, fetch, platform }) => {
		const formData = await request.formData();

		const firstName = String(formData.get('firstName') ?? '').trim();
		const lastName = String(formData.get('lastName') ?? '').trim();
		const email = String(formData.get('email') ?? '').trim();
		const company = String(formData.get('company') ?? '').trim();
		const message = String(formData.get('message') ?? '').trim();

		if (!firstName || !lastName || !email || !company || !message) {
			return fail(400, { error: 'Please complete all required fields.' });
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { error: 'Please provide a valid email address.' });
		}

		const endpoint = env.FORMSPREE_ENDPOINT;
		if (!endpoint) {
			return {
				success:
					'Form received. Set FORMSPREE_ENDPOINT in your environment to forward messages by email.'
			};
		}

		const payload = new URLSearchParams({
			firstName,
			lastName,
			email,
			company,
			message
		});

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
			body: payload
		});

		if (!response.ok) {
			return fail(500, { error: 'Unable to submit form right now. Please try again shortly.' });
		}

		return { success: "Thanks, your message was submitted. We'll get back to you soon." };
	}
};
