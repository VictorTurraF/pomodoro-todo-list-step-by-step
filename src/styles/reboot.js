// Reboot.js
import { globalCss } from "@stitches/react";

export const rebootCss = globalCss({
  // Your global styles go here, including reset or normalization
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    fontFamily: "'Varela Round', sans-serif",
  },
});
