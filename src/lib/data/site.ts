import { BarChart3, Database, FlaskConical, ShieldCheck } from 'lucide-svelte';

export const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/solutions', label: 'Solutions' },
	{ href: '/get-started', label: 'Get Started' }
];

export const services = [
	{
		title: 'Cloud Analytics Modernization',
		description:
			'Turn your cloud data into an active decision system with modern architecture, dashboards, and secure pipelines.',
		icon: BarChart3
	},
	{
		title: 'Data Management',
		description:
			'Build unified and automated data platforms that scale cleanly across departments, regions, and regulatory boundaries.',
		icon: Database
	},
	{
		title: 'Data Science Acceleration',
		description:
			'Ship production-ready AI and machine learning faster, with battle-tested feature engineering and model lifecycle practices.',
		icon: FlaskConical
	},
	{
		title: 'Governance & Compliance',
		description:
			'Enforce trusted governance policies for GDPR, HIPAA, CPRA, PCI DSS, and enterprise audit requirements.',
		icon: ShieldCheck
	}
];

export const partnerLogos = [
	{ src: '/logos/partner-a.png', alt: 'Original partner logo A' },
	{ src: '/logos/partner-b.png', alt: 'Original partner logo B' },
	{ src: '/logos/partner-c.png', alt: 'Original partner logo C' },
	{ src: '/logos/databricks.svg', alt: 'Databricks logo' },
	{ src: '/logos/snowflake.svg', alt: 'Snowflake logo' },
	{ src: '/logos/googlecloud.svg', alt: 'Google Cloud logo' }
];

export const stats = [
	{ label: 'Years of experience', value: 25, suffix: '+' },
	{ label: 'Business partners', value: 21, suffix: '+' },
	{ label: 'Data rows democratized', value: 85, suffix: 'T' },
	{ label: 'Industry certifications', value: 28, suffix: '' },
	{ label: 'Industry awards', value: 5, suffix: '' }
];
