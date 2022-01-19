import commons from "../../styles/commons.styles";
import theme from "../../styles/theme.styles";

const base = {
  container: {
    ...commons.containerDefault,
  },
  header: {
    ...commons.header,
    ...commons.headerDefault,
  },
  btn: {
    ...commons.btn,
  },
  nav: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  navBackBtn: {
    width: 40,
    height: 40,
    // justifyContent: "center",
    alignItems: "flex-start",
  },
  navBackIcon: {
    color: theme.COLOR_DEFAULT_SECONDARY_LIGHT_BG,
    height: 14,
    width: 14,
    strokeWidth: 10,
  },
  btnIcon: {
    height: 30,
    width: 30,
    marginRight: theme.SPACING_SM,
  },
  btnText: {
    ...commons.btnText,
  },
  descText: {
    ...commons.descText,
  },
};

const variants = {
  google: {
    borderColor: theme.COLOR_DEFAULT_SECONDARY_LIGHT_BG,
    ...commons.shadowSm,
  },
  facebook: {
    borderColor: "#1877f2",
    backgroundColor: "#1877f2",
    ...commons.shadowSm,
  },
  btnTextFacebook: {
    color: "white",
  },
};

export default {
  ...base,
  ...variants,
}