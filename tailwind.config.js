/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.blue.300')}`,
            },
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: '800',
              fontSize: '2.5em',
              marginTop: '1.5em',
              marginBottom: '0.8em',
              lineHeight: '1.2',
            },
            h2: {
              color: theme('colors.gray.900'),
              fontWeight: '700',
              fontSize: '2em',
              marginTop: '1.5em',
              marginBottom: '0.8em',
              lineHeight: '1.3',
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.8em',
            },
            h4: {
              color: theme('colors.gray.900'),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.8em',
            },
            'h1, h2, h3, h4': {
              'scroll-margin-top': theme('spacing.32'),
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            code: {
              color: theme('colors.pink.600'),
              backgroundColor: theme('colors.gray.100'),
              padding: theme('spacing.1'),
              borderRadius: theme('borderRadius.md'),
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.gray.900'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.4'),
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              borderLeftWidth: '4px',
              paddingLeft: '1em',
              fontStyle: 'italic',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}