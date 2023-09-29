import { colors, fontSizes, fonts, lineHeights, radii, space } from "@ignite-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontSizes,
    fonts: fonts,
    lineHeights: lineHeights,
    radii: radii,
    space: space
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space'
  }
})