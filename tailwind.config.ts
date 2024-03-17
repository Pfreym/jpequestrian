import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        allison: ["allison", ...fontFamily.sans],
        epilogue: ["epilogue", ...fontFamily.sans],
        },
    },
  },
  plugins: [],
} satisfies Config;
