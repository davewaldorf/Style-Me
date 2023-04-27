module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'sign-in': "url('/src/assets/signIn-bg.png')",
        'sign-up': "url('/src/assets/signUp-bg.png')",
      }
    },
  },
  daisyui: {
    themes: ["lofi"],
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
};