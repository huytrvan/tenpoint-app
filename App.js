import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import HomePage from './app/pages/Home.page';
import { connect } from 'react-redux';
import { Provider} from 'react-redux';
import initStore  from './app/redux/store';

const store = initStore();

function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default connect(null, null)(App);