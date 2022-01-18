import theme from "../../styles/theme.styles";
import commons from "../../styles/commons.styles";

const base = {
  container: {
    ...commons.containerDefault,
  },
  brandName: {
    ...commons.header,
  },
  introText: {
    ...commons.descText,
  },
  btn: {
    ...commons.btn,
  },
  btnText: {
    ...commons.btnText,
    width: "100%",
  },
  linkAction: {
    marginTop: "auto",
  },
  linkActionText: {
    textDecorationLine: "underline",
    fontSize: theme.FONT_SIZE_FOOTNOTE,
    color: theme.COLOR_PRIMARY_LIGHT_BG,
  },
};

const variants = {
  brandNameLightBg: {
    color: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
  },
  btnPrimary: {
    ...commons.shadowSm,
    backgroundColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
    borderColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
  },
  btnTextPrimary: {
    color: theme.COLOR_ACTION_PRIMARY_DARK_BG,
  },
  btnSecondary: {
    backgroundColor: theme.COLOR_ACTION_PRIMARY_DARK_BG,
    borderColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
  },
  btnTextSecondary: {
    color: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
  },
};

export default {
  ...base,
  ...variants,
};