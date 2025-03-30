/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",

  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
        nasalization: ['"Nasalization"', 'sans-serif'],
      },
      colors: {
        primary: defaultTheme.colors.blue,
        danger: defaultTheme.colors.rose,
        warning: defaultTheme.colors.yellow,
        success: defaultTheme.colors.lime,
        info: defaultTheme.colors.blue,
        zinc: defaultTheme.colors.zinc, // adiciona zinc sem remover gray
        // ⚠️ Não sobrescrevemos "gray", assim "gray-800" e cia continuam funcionando
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0' },
        },
        scanIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px) scale(0.9)',
            filter: 'blur(4px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
            filter: 'blur(0)',
          },
        },
      },
      animation: {
        flicker: 'flicker 1.5s linear infinite',
        scanIn: 'scanIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
