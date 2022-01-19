import theme from "./theme.styles";

/* Utilities */
const shadowSm = {
  shadowColor: "#7C2D12",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.02,
  elevation: 2,
};

const shadow = {
  shadowColor: "#7C2D12",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.05,
  elevation: 3,
}

/* Commons */
const container = {
  width: "100%",
  height: "100%",
  paddingVertical: 50,
  paddingHorizontal: 25,
  backgroundColor: theme.BG_COLOR_DEFAULT_PRIMARY,
};
const containerDefault = {
  ...container,
  alignItems: "center",
};

const header = {
  fontSize: theme.FONT_SIZE_HEADING,
  fontWeight: theme.FONT_WEIGHT_ACTION,
  marginBottom: theme.SPACING_XS,
};
const headerDefault = {
  ...header,
  textAlign: "center",
  color: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
};

const btn = {
  marginBottom: theme.SPACING_MD,
  borderRadius: 5,
  paddingVertical: theme.SPACING_MD,
  width: "100%",
  borderWidth: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: theme.SPACING_MD,
};

const btnText = {
  textAlign: "center",
  fontSize: theme.FONT_SIZE_LG,
  color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
};

const descText = {
  textAlign: "center",
  fontSize: theme.FONT_SIZE_LG,
  color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
  marginTop: theme.SPACING_BASE,
  marginBottom: theme.SPACING_BASE,
};
export default {
  shadowSm,
  shadow,
  header,
  headerDefault,
  container,
  containerDefault,
  btn,
  btnText,
  descText,
};