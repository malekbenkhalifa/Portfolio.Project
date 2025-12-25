/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff1f2",   // rose-50
          100: "#ffe4e6",  // rose-100
          500: "#ec4899",  // pink-500
          600: "#db2777",  // pink-600
          900: "#500724"   // deep rose
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.8)"
      },
    },
  },
  plugins: [],
}
