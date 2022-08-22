import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({}),
    presetRemToPx(),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "Quicksand",
      },
    }),
  ],
});
