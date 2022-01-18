import utils from "./utilities.styles";
/* Contain all theme design restrictions & conventions */

const size = {
  W_LOGO: 100,
  H_LOGO: 100,
}

const spacing = {
  SPACING_XXS: 4,
  SPACING_XS: 8,
  SPACING_SM: 12,
  SPACING_BASE: 14,
  SPACING_MD: 16,
  SPACING_LG: 24,
  SPACING_XL: 32,
  SPACING_2XL: 64,
};

const color = {
  COLOR_DEFAULT_PRIMARY_LIGHT_BG: utils.GRAY_700,
  COLOR_DEFAULT_SECONDARY_LIGHT_BG: utils.GRAY_600,
  /*  */
  COLOR_ACTION_PRIMARY_LIGHT_BG: utils.ORANGE_500,
  COLOR_ACTION_PRIMARY_DARK_BG: utils.WHITE,
  COLOR_ACTION_SECONDARY_LIGHT_BG: utils.ORANGE_50,
};

const fontSize = {
  FONT_SIZE_HEADING: utils.TEXT_2XL,
  FONT_SIZE_LG: utils.TEXT_LG,
  FONT_SIZE_ACTION: utils.TEXT_BASE,
  FONT_SIZE_FOOTNOTE: utils.TEXT_SM,
}

const fontWeight = {
  FONT_WEIGHT_ACTION: utils.FONT_SEMIBOLD,
}

const borderRadius = {
  ROUNDED_LOGO: 50,
}

export default {
  ...size,
  ...color,
  ...fontSize,
  ...fontWeight,
  ...spacing,
  ...borderRadius,
};