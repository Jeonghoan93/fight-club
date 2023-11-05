/** @type {import('tailwindcss').Config} */
import path from "path";

module.exports = {
  content: [path.join(__dirname, "./src/**/*.(vue)")],
  theme: {
    extend: {},
  },
  plugins: [],
};
