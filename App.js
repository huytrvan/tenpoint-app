// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroPage from "./app/pages/Intro/Intro.page";

export default function App() {
  return (
    <View style={styles.container}>
      <IntroPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 25,
  }
});