/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake",
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19d3ae",
          // secondary: "#19D3AE",
          // accent: "1db27f#",
          accent: "#0f4271",
          neutral: "#ff00ff",
          // success: "#141212",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

