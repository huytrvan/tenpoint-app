import theme from "../../styles/theme.styles";
import commonStyles from "../../styles/common.styles";

const commons = {
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    
  },
  brandName: {
    fontSize: theme.FONT_SIZE_HEADING,
    fontWeight: theme.FONT_WEIGHT_ACTION,
  },
  introText: {
    textAlign: "center",
    marginTop: theme.SPACING_BASE,
    marginBottom: theme.SPACING_2XL,
    fontSize: theme.FONT_SIZE_LG,
    color: theme.COLOR_PRIMARY_LIGHT_BG,
  },
  btn: {
    marginBottom: theme.SPACING_SM,
    borderRadius: 5,
    paddingVertical: theme.SPACING_MD,
    width: "100%",
    borderWidth: 1,
  },
  btnText: {
    textAlign: "center",
    fontSize: theme.FONT_SIZE_LG,
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
    ...commonStyles.shadowSm,
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
  ...commons,
  ...variants,
};