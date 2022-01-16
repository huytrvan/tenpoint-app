import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './Home.component.style'
import TextArea from '../TextArea/TextArea.component';
import PropTypes from 'prop-types';

const Home = (props) => {
  const { setTitle, title, text, setText } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Note Title</Text>
        <TextInput 
          style={styles.titleInput}
          onChangeText={setTitle}
          value={title} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Description</Text>
        <TextArea 
          style={styles.descTextArea}
          setText={setText}
          text={text}
          />
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarWrapper}>
          <Text style={styles.saveBtn}>Save</Text>
          <Text style={styles.characterCount}>{text.length}/1000 Characters</Text>
        </View>
      </View>
    </View>
  )
}

Home.propTypes = {
  setTitle: PropTypes.func,
  setText: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Home;