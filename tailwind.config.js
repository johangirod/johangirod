import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif'],
			serif: ['Petrona', 'serif']
		},
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							'&::before': {
								content: 'none !important'
							},
							'&::after': {
								content: 'none !important'
							},
							border: '1px solid',
							borderRadius: '0.25rem',
							borderColor: theme('colors.slate.200'),
							backgroundColor: theme('colors.slate.100'),
							padding: '0.125rem 0.25rem',
							// color: theme('colors.dark'),
							fontWeight: theme('fontWeight.regular')
						},
						pre: {
							'& code': {
								backgroundColor: 'transparent',
								border: 'none',
								padding: 0
							},
							borderRounding: '0.175rem'
						}
					}
				}
			})
		}
	},
	plugins: [typography]
};
