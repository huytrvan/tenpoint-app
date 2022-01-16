import AppContainer from './App.container';
import { Provider} from 'react-redux';
import { initStore } from './redux/store';

const store = initStore();

function NoteTaker() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default NoteTaker;