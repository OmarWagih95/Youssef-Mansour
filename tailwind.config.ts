import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
      backgroundImage:{
        bg1:'url(/bg1.png)',
        bgGray:'url(/bgtry.png)',
        saveDesktop:'url(/save1.jpg)',
        saveMob:'url(/save2.jpg)'

      },
    extend: {
      colors: {
        darkGrey:'#222831',
        lightGrey:'#31363F',
        primary:'#387478',
        backgroundColor:'#EEEEEE',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
