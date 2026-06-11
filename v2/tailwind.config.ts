/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      // 1. アニメーションの名前と挙動（6s ease infinite）を設定
      animation: {
        rainbow: "rainbowAnimation 6s ease infinite",
      },
      // 2. キーフレーム（0%, 50%, 100%）を設定
      keyframes: {
        rainbowAnimation: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
