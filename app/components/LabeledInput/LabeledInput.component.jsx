import React, {useState} from 'react';
import { View, Text, TextInput } from "react-native";
import { Controller } from 'react-hook-form';

import styles from "./LabeledInput.styles";

const LabeledInput = (props) => {
  const [ isFocused, setIsFocused ] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.inputLabel}</Text>
      <Controller
        name={props.inputName}
        control={props.inputControl}
        rules={props.inputRule}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
    </View>
  );
}

export default LabeledInput