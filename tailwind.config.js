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
                    primary: '#A1F01B',
                    secondary: '#365314',
                    accent: '#fde047',
                    neutral: '#292524',
                    'base-100': '#f5f5f4',
                    info: '#67e8f9',
                    success: '#a3e635',
                    warning: '#f97316',
                    error: '#dc2626',
                },
            },
            {
                dark: {
                    primary: '#A1F01B',
                    secondary: '#365314',
                    accent: '#fde047',
                    neutral: '#292524',
                    'base-100': '#161621',
                    info: '#67e8f9',
                    success: '#a3e635',
                    warning: '#f97316',
                    error: '#dc2626',
                },
            },
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    darkMode: ['class', '[data-theme="dark"]'],
};
