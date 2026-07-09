import typography from '@tailwindcss/typography';
import { blue } from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ['Ubuntu Mono', 'monospace']
      },
      colors: {
        grey: {
          900: '#141414',
          700: '#242424',
          600: '#292929',
          300: '#6F6F6F',
          200: '#898989',
          100: '#ebebeb',
          50: '#FDFDFD'
        },
        primary: blue
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.grey.100'),
            '--tw-prose-headings': theme('colors.grey.100'),
            '--tw-prose-bold': theme('colors.grey.100'),
            '--tw-prose-counters': theme('colors.primary.400'),
            '--tw-prose-bullets': theme('colors.primary.400'),
            '--tw-prose-code': theme('colors.primary.400'),
            '--tw-prose-links': theme('colors.primary.400'),
            '--tw-prose-quotes': theme('colors.grey.50'),
            '--tw-prose-quote-borders': theme('colors.grey.600'),
            '--tw-prose-hr': theme('colors.grey.600'),
            code: {
              backgroundColor: theme('colors.grey.700'),
              padding: '4px',
              borderRadius: '6px'
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              backgroundColor: theme('colors.grey.600'),
              color: theme('colors.grey.50'),
              border: '0',
              padding: '1em',
              fontWeight: 'normal',
              borderRadius: '6px',
              fontStyle: 'normal'
            },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' },
            a: {
              textDecoration: 'none'
            }
          }
        }
      })
    }
  },
  plugins: [typography]
};
