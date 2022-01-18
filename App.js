// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInPage from "./app/pages/LogIn/LogIn.page";

export default function App() {
  return (
    <View style={styles.container}>
      <LogInPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 25,
  }
});