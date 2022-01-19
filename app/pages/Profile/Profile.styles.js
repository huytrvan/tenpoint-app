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
};

// const variants = {
// }

export default {
  ...base,
}