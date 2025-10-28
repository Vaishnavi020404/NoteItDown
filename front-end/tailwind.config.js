/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui:{
    themes:["valentine","retro","night","dracula","aqua","lemonade" ,"light","dark" ,"cupcake","bumblebee" ,"synthwave","cyberpunk","corporate","garden","forest","halloween","business","lofi","pastel","fantasy","wireframe","black","luxury","autumn","cmyk","winter","acid","coffee","winter","procyon" ,"night","caramellatte"],
  }
}     