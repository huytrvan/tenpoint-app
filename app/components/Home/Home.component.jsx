import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './Home.component.style'
import TextArea from '../TextArea/TextArea.component';

const Home = () => {
  const [title, setTitle] = useState('');
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
        <TextArea style={styles.descTextArea} />
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarWrapper}>
          <Text style={styles.saveBtn}>Save</Text>
          <Text style={styles.characterCount}>{20} Characters</Text>
        </View>
      </View>
    </View>
  )
}

export default Home