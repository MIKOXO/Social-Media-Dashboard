/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //  Primary
        Green500: "hsl(163, 72%, 41%)",
        Red500: "hsl(356, 69%, 56%)",

        FacebookBlue: " hsl(208, 92%, 53%)",
        TwitterBlue: "hsl(203, 89%, 53%)",
        InstagramGradient:
          "hsl(37, 97%, 70%) to hsl(5, 77%, 71%) to hsl(329, 70%, 58%)",
        YoutubeRed: "hsl(348, 97%, 39%)",

        // Dark Theme
        DarkToggleGradient: "hsl(210, 79%, 56%) to hsl(146, 68%, 55%)",

        // Light Theme
        LightToggleGray: "hsl(230, 22%, 74%)",

        // Neutral

        // Dark Theme
        BackgruondGray: "hsl(230, 17%, 14%)",
        TopBgGray: "hsl(232, 19%, 15%)",
        CardBgNavy: "hsl(228, 28%, 20%)",
        Gray400: "hsl(230, 22%, 74%)",
        White: "hsl(0, 100%, 100%)",

        // Light Theme
        TopbgBlue: "hsl(225, 100%, 98%)",
        CardBgNavy50: "hsl(227, 47%, 96%)",
        Gray650: "hsl(228, 12%, 44%)",
        LightThemeGray950: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
