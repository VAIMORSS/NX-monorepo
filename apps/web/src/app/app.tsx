import { Provider } from 'react-redux';
import styles from './app.module.scss';
import Counter from './components/Counter';
import { store } from '@poc/redux/redux-a';

export function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
