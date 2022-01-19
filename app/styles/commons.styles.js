import theme from "./theme.styles";

const shadowSm = {
  shadowColor: "#7C2D12",
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.05,
  elevation: 3,
}

const container = {
  width: "100%",
  height: "100%",
};
const containerDefault = {
  ...container,
  alignItems: "center",
};

const header = {
  fontSize: theme.FONT_SIZE_HEADING,
  fontWeight: theme.FONT_WEIGHT_ACTION,
};
const headerDefault = {
  ...header,
  textAlign: "center",
  color: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
  // marginBottom: theme.SPACING_BASE,
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
  header,
  headerDefault,
  container,
  containerDefault,
  btn,
  btnText,
  descText,
};