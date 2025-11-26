/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
                hand: ['Caveat', 'cursive'],
            },
            colors: {
                'brand-yellow': '#ebe462',
                'brand-teal': '#317788',
                'brand-lightblue': '#c0dee8',
                'brand-orange': '#e66222',
            },
            spacing: {
                'gutter-sm': '10px',
                'gutter-md': '15px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '15px',
                    sm: '15px',
                    lg: '30px', // Larger padding on big screens
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1440px', // Max width for the container
                },
            },
        },
    },
    plugins: [],
}
