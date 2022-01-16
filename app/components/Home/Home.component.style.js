import { StyleSheet } from 'react-native';
import { textInputStyle, textAreaStyle, inputLabelStyle, shadowSm } from '../../styles/common.style';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.BG_LIGHT_THEME,
    paddingHorizontal: theme.PADDING_CONTAINER_HORIZONTAL,
    paddingVertical: theme.PADDING_CONTAINER_VERTICAL,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: theme.BORDER_WIDTH,
    borderColor: theme.BORDER_LIGHT_THEME,
  },
  inputContainer: {
    marginBottom: 8,
    alignSelf: 'stretch',
    overflow: 'visible',
     ...shadowSm,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    ...inputLabelStyle,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: theme.BG_ACTION_BAR_LIGHT_THEME,
    borderRadius: theme.BORDER_INPUT_RADIUS,
  },
  saveBtn: {
    padding: 10,
    fontWeight: theme.FONT_BOLD
  },
  characterCount: {
    padding: 10,
    fontSize: theme.TEXT_SM,
  },
  titleInput: {
    ...textInputStyle,
  },
  descTextArea: {
    ...textAreaStyle,
    // flex: 1,
  }
});