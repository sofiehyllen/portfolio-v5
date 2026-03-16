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
                mono: ['"Source Code Pro", monospace']
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#FCFCFC',
                    'primary-content': '#161621',
                    secondary: '#E9E9F3',
                    'secondary-content': '#212131',
                    accent: '#A1F01B',
                    'accent-content': '#65990A',
                    neutral: '#5D5D89',
                    'neutral-content': '#5D5D89',
                    'base-100': '#FCFCFC',
                    info: '#67E8F9',
                    success: '#E8FBC5',
                    warning: '#F97316',
                    error: '#DC2626',
                },
            },
            {
                dark: {
                    primary: '#161621',
                    'primary-content': '#FCFCFC',
                    secondary: '#212131',
                    'secondary-content': '#E9E9F3',
                    accent: '#A1F01B',
                    'accent-content': '#324C05',
                    neutral: '#5D5D89',
                    'neutral-content': '#B2B2CD',
                    'base-100': '#212131',
                    info: '#67E8F9',
                    success: '#B9F452',
                    warning: '#F97316',
                    error: '#DC2626',
                },
            },
        ],
    },
    plugins: [typography, daisyui],
    darkMode: ['class', '[data-theme="dark"]'],
};
