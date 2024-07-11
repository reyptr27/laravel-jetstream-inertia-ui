import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./vendor/laravel/jetstream/**/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{vue,js,jsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        dark: {
          "eval-0": "#151823",
          "eval-1": "#222738",
          "eval-2": "#2A2F42",
          "eval-3": "#2C3142",
        },

        cyan: colors.cyan,
      },
    },
  },

  plugins: [
    forms({
      strategy: "class",
    }),
    typography,
  ],
};
