import commons from '../../styles/commons.styles';
import theme from '../../styles/theme.styles';

const base = {
  container: {
    ...commons.container,
  },
  header: {
    ...commons.headerDefault,
    marginBottom: theme.SPACING_MD,
  },
  btn: {
    ...commons.btn,
  },
  btnText: {
    ...commons.btnText,
    width: "100%",
  },
};

const variants = {
  btnPrimary: {
    ...commons.shadowSm,
    backgroundColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
    borderColor: theme.COLOR_ACTION_PRIMARY_LIGHT_BG,
  },
  btnTextPrimary: {
    color: theme.COLOR_ACTION_PRIMARY_DARK_BG,
  },
};

export default {
  ...base,
  ...variants,
}