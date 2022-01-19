import theme from "../../styles/theme.styles";
import commons from "../../styles/commons.styles";

const base = {
  container: {
    position: "relative",
    height: 80,
    zIndex: 999,
  },
  toggler: {
    height: "50%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  languageIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
    color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
    strokeWidth: 10,
  },
  triangleDownIcon: {
    width: 8,
    height: 8,
    color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
  },
  languageList: {
    borderWidth: 1,
    borderColor: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
    borderRadius: 5,
    position: "absolute",
    padding: 5,
    right: 0,
    top: "45%",
    backgroundColor: "#fff",
    display: "none",
    ...commons.shadowSm,
  },
  languageItem: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 2,
  },
  flagIcon: {
    width: 22,
    height: 22,
    opacity: 0.85,
    marginRight: 5,
    marginTop: 1,
  },
  languageName: {
    color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
  },
};

const variants = {}

export default { ...base, ...variants }