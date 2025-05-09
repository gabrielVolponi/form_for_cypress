/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ajuste os caminhos conforme necessário
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Azul personalizado
        secondary: "#9333EA", // Roxo personalizado
      },
      spacing: {
        128: "32rem", // Exemplo de espaçamento personalizado
      },
    },
  },
  plugins: [],
};