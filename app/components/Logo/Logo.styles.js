import { StyleSheet } from "react-native";
import theme from "../../styles/theme.styles";

const commons = {
  logo: {
    width: theme.W_LOGO,
    height: theme.H_LOGO,
    borderRadius: theme.ROUNDED_LOGO,
  },
};

const variants = {
  logoLightBg: {
    backgroundColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
    color: theme.COLOR_ACTION_PRIMARY_DARK_BG,
  },
}

export default StyleSheet.create({
  ...commons,
  ...variants,
});