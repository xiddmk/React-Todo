import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './App/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
