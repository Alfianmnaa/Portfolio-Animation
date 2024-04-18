/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        headline1: "80px",
        headline2: "64px",
        subheadline: "24px",
        body: "20px",
        normal: "16px",
        smallText: "14px",
        verySmallText: "12px",
      },
    },
  },
  plugins: [],
};
