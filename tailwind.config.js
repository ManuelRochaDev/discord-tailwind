/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'gray-1': '#A5AAB1',
      'gray-2': '#6B7079',
      'gray-3': '#313338',
      'gray-4': '#2b2d31',
      'gray-5': '#2b2d31',
      'gray-6': '#1E1F22',
      'gray-7': '#1A1B1D',
      'red': '#DB3A3A',
      'green': '#3B914F',
      'text-gray': '#808991',
      'yellow': '#E1B434',
      'blue': '#546bea'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
