/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-base": "#BF9D7D",
        "primary-dark": "#8B6F4D",
        "primary-80": "#AE9984",
        "primary-60": "#E1D1C2",
        "primary-40": "#F1EAE4",
        "primary-tint": "#FAF7F5",
        "success-base": "#52DD7E",
        "success-dark": "#299F65",
        "success-20": "#BCFBBD",
        "success-10": "#E8FEE7",
        "info-base": "#3BADEF",
        "info-dark": "#1D66AC",
        "info-20": "#B1EFFD",
        "info-10": "#E6FBFE",
        "error-base": "#DA3E51",
        "error-dark": "#C22538",
        "error-20": "#F5CCD1",
        "error-10": "#FDECEF",
        "black-bg": "#140F0A",
        "black-80": "#4B4B4B",
        "black-60": "#909090",
        "black-40": "#ECECEC",
        "black-10": "#F9F9F9",
      },
    },
  },
  plugins: [],
};
