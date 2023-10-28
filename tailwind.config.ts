import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
	},
	plugins: [],
}

export default config
