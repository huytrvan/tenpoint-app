const colors = {
  GRAY_50: '#F9FAFB',
  GRAY_100: '#F3F4F6',
  GRAY_200: '#E5E7EB',
  GRAY_300: '#D1D5DA',
  GRAY_400: '#9CA3AF',
  GRAY_800: '#1F2937',
}

/* Theme conventions */
const TEXT = {
  TEXT_LIGHT_THEME: colors.GRAY_800,
  TEXT_SM: 12,
  TEXT_BASE: 14,
  TEXT_LG: 16,
}

const FONT = {
  FONT_LIGHT: '200',
  FONT_BASE: '400',
  FONT_SEMIBOLD: '600',
  FONT_BOLD: '700',
}

const BG = {
  BG_LIGHT_THEME: colors.GRAY_200,
  BG_INPUT_LIGHT_THEME: 'white', 
}

const BORDER = {
  BORDER_LIGHT_THEME: colors.GRAY_300,
  BORDER_INPUT_RADIUS: 4,
  BORDER_INPUT_WIDTH: 1,
}

const PADDING = {
  PADDING_INPUT_HORIZONTAL: 15,
  PADDING_INPUT_VERTICAL: 12,
  PADDING_CONTAINER_HORIZONTAL: 10,
  PADDING_CONTAINER_VERTICAL: 30,
}

const MARGIN = {
  MARGIN_INPUT_HEADING_HORIZONTAL: 2,
}
const ALIGN = {
  ALIGN_INPUT: 'stretch',
}

export default {
  ...TEXT,
  ...FONT,
  ...BG,
  ...BORDER,
  ...PADDING,
  ...ALIGN,
  ...MARGIN,
}