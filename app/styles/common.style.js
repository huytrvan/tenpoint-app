import theme from './theme.style'

/* Utilities */
export const shadowSm = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.01,
  elevation: 2,
}


/* Components */
export const textInputStyle = {
  width: '100%',
  paddingHorizontal: theme.PADDING_INPUT_HORIZONTAL,
  /* paddingVertical doesn't work, so must use like below */
  paddingTop: theme.PADDING_INPUT_VERTICAL,
  paddingBottom: theme.PADDING_INPUT_VERTICAL,
  /* --- */
  borderRadius: theme.BORDER_INPUT_RADIUS,
  borderWidth: theme.BORDER_INPUT_WIDTH,
  borderColor: theme.BORDER_LIGHT_THEME,
  backgroundColor: theme.BG_INPUT_LIGHT_THEME,
}

export const textAreaStyle = {
  ...textInputStyle,
  lineHeight: 21,
  overflow: 'scroll',
}

export const inputLabelStyle = {
    fontSize: theme.TEXT_BASE,
    fontWeight: theme.FONT_SEMIBOLD,
    marginHorizontal: theme.MARGIN_INPUT_HEADING_HORIZONTAL,
    marginBottom: 1,
}