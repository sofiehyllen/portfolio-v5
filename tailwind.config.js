import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}', './index.html'],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Avenir Next", sans-serif'],
                mono: ['"Source Code Pro", monospace']
            },
        },
    },
    daisyui: {
        themes: [
            {
                dark: {
                    primary: '#161621',
                    'primary-content': '#FCFCFC',
                    secondary: '#212131',
                    'secondary-content': '#E9E9F3',
                    accent: '#A1F01B',
                    'accent-content': '#263905',
                    neutral: '#5D5D89',
                    'neutral-content': '#B2B2CD',
                    'base-100': '#212131',
                    info: '#67E8F9',
                    success: '#B9F452',
                    warning: '#F97316',
                    error: '#871414',
                },
            },
            {
                light: {
                    primary: '#FCFCFC',
                    'primary-content': '#161621',
                    secondary: '#E9E9F3',
                    'secondary-content': '#212131',
                    accent: '#A1F01B',
                    'accent-content': '#263905',
                    neutral: '#5D5D89',
                    'neutral-content': '#5D5D89',
                    'base-100': '#FCFCFC',
                    info: '#67E8F9',
                    success: '#B9F452',
                    warning: '#F97316',
                    error: '#E84949',
                },
            },
        ],
    },
    plugins: [typography, daisyui],
    darkMode: ['class', '[data-theme="dark"]'],
};
