import React from 'react';
import { TextInput } from 'react-native';
import style from './TextArea.component.style';

const TextArea = (props) => {
  const {text, setText, ...extraProps} = props;
  return (
    <TextInput
      {...extraProps}
      style={[style.textArea, extraProps.style]}
      multiline={true}
      onChangeText={setText} 
      value={text}
      underlineColorAndroid={'transparent'}
    />
  );
}

export default TextArea;