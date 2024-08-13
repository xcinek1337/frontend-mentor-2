/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Figtree: ['Figtree', 'sans-serif'],
			},
			colors: {
				yellowFM: 'hsl(47, 88%, 63%)',
			},
		},
	},
	plugins: [],
};
