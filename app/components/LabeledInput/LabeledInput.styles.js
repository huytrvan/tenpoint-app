import theme from "../../styles/theme.styles";
import commons from "../../styles/commons.styles";

const base = {
  container: {
    marginBottom: theme.SPACING_LG,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
    paddingVertical: theme.SPACING_MD,
    paddingHorizontal: theme.SPACING_BASE,
    fontSize: theme.FONT_SIZE_INPUT,
    borderRadius: 5,
    color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
    backgroundColor: theme.COLOR_ACTION_PRIMARY_DARK_BG,
  },
  label: {
    marginLeft: theme.SPACING_XS,
    marginBottom: theme.SPACING_XXS,
    color: theme.COLOR_DEFAULT_PRIMARY_LIGHT_BG,
  },
};

const variants = {
  inputFocused: {
    ...commons.shadow,
  },
  inputUnfocused: {
    ...commons.shadowSm,
    backgroundColor: 'red'
  }
};
export default {
  ...base,
  ...variants,
}