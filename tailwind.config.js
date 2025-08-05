/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Main Colors
        'mcs-blue': '#091851',
        'mcs-orange-light': '#FFA940',
        'mcs-orange': '#FF7A00',
        'mcs-orange-dark': '#CC6200',
        'mcs-white': '#F5F6FA',
        'mcs-grey': '#EBECF2',
        'mcs-black': '#020614',

        // Text Colors
        'txt-white-prim': '#F5F6FA',
        'txt-white-sec': '#A9B8F1',
        'txt-black-prim': '#020614',
        'txt-black-sec': '#525664',

        // Disabled Colors
        'disabled': '#D9CEC3',
        'disabled-txt': '#8B8075',
      }
    },
  },
  plugins: [],
}