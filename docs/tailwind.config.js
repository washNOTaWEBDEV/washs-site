/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        instagram: {
          '0%': { filter: 'none' },
          '10%': {filter: 'invert(85%) sepia(17%) saturate(7471%) hue-rotate(4deg) brightness(109%) contrast(102%)'},
          '20%': {filter: 'invert(50%) sepia(49%) saturate(4443%) hue-rotate(5deg) brightness(110%) contrast(102%)'},
          '30%': {filter: 'invert(24%) sepia(100%) saturate(7398%) hue-rotate(329deg) brightness(101%) contrast(106%)'},
          '40%': {filter: 'invert(15%) sepia(86%) saturate(6902%) hue-rotate(298deg) brightness(93%) contrast(115%)'},
          '50%': {filter: 'invert(25%) sepia(79%) saturate(4163%) hue-rotate(252deg) brightness(96%) contrast(104%)'},
          '60%': {filter: 'invert(15%) sepia(86%) saturate(6902%) hue-rotate(298deg) brightness(93%) contrast(115%)'},
          '70%': {filter: 'invert(24%) sepia(100%) saturate(7398%) hue-rotate(329deg) brightness(101%) contrast(106%)'},
          '80%': {filter: 'invert(50%) sepia(49%) saturate(4443%) hue-rotate(5deg) brightness(110%) contrast(102%)'},
          '90%': {filter: 'invert(85%) sepia(17%) saturate(7471%) hue-rotate(4deg) brightness(109%) contrast(102%)'},
          '100%': { filter: 'none' },
        },
      },
      animation: {
        'instagram-rainbow': 'instagram 10s linear infinite',
      },
    },
  },
  plugins: [],
}