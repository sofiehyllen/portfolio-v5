import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}', './index.html'],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Space Grotesk", sans-serif'],
                sans: ['"Avenir Next", sans-serif'],
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#FCFCFC',
                    'primary-content': '#161621',
                    secondary: '#F5F5F4',
                    'secondary-content': '#212131',
                    accent: '#A1F01B',
                    neutral: '#5D5D89',
                    'neutral-content': '#5D5D89',
                    'base-100': '#F5F5F4',
                    info: '#67E8F9',
                    success: '#A3E635',
                    warning: '#F97316',
                    error: '#DC2626',
                },
            },
            {
                dark: {
                    primary: '#161621',
                    'primary-content': '#FCFCFC',
                    secondary: '#212131',
                    'secondary-content': '#F5F5F4',
                    accent: '#A1F01B',
                    neutral: '#5D5D89',
                    'neutral-content': '#B2B2CD',
                    'base-100': '#161621',
                    info: '#67E8F9',
                    success: '#A3E635',
                    warning: '#F97316',
                    error: '#DC2626',
                },
            },
        ],
    },
    plugins: [typography, daisyui],
    darkMode: ['class', '[data-theme="dark"]'],
};
