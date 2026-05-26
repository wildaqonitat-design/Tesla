/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    screens: {
      lg: {
        raw: "screen and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
              },
              colors: {
                tesla: {
                  dark:    '#171a20',
                  gray:    '#393c41',
                  light:   '#5c5e62',
                  silver:  '#f4f4f4',
                },
              },
              spacing: {
                '15': '3.75rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
              },
              minHeight: {
                'hero': '600px',
              },
              backdropBlur: {
                xs: '2px',
              },
              keyframes: {
                bounce: {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%':       { transform: 'translateY(8px)' },
                },
              },
              animation: {
                'bounce-slow': 'bounce 1.8s ease-in-out infinite',
              },
            },
          },
        }