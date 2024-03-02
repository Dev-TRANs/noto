/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sms: '432px',
				mds: '800px',
			},  
			zIndex: {
			  'highest': '9999',
			}
		},
	},
	plugins: [],
}
