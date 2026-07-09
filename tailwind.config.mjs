import typography from '@tailwindcss/typography';
import { blue } from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
          800: '#242424',
          700: '#242424',
          600: '#292929',
          500: '#4a4a4a',
          300: '#6F6F6F',
          200: '#898989',
          150: '#e1e1dd',
          100: '#ebebeb',
          75: '#f3f3f1',
          50: '#FDFDFD',
          25: '#f8f8f6'
        },
        primary: blue
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.grey.500'),
            '--tw-prose-headings': theme('colors.grey.800'),
            '--tw-prose-bold': theme('colors.grey.800'),
            '--tw-prose-counters': theme('colors.primary.400'),
            '--tw-prose-bullets': theme('colors.primary.400'),
            '--tw-prose-code': theme('colors.primary.400'),
            '--tw-prose-links': theme('colors.primary.400'),
            '--tw-prose-quotes': theme('colors.grey.800'),
            '--tw-prose-quote-borders': theme('colors.grey.150'),
            '--tw-prose-hr': theme('colors.grey.150'),
            code: {
              backgroundColor: theme('colors.grey.75'),
              padding: '4px',
              borderRadius: '6px'
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0'
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              backgroundColor: theme('colors.grey.75'),
              color: theme('colors.grey.800'),
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
        },
        invert: {
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
              backgroundColor: theme('colors.grey.700')
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0'
            },
            blockquote: {
              backgroundColor: theme('colors.grey.600'),
              color: theme('colors.grey.50')
            }
          }
        }
      })
    }
  },
  plugins: [typography]
};
