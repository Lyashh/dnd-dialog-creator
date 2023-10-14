import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/app.scss';
import { Provider, rootStore } from './stores/Root';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider value={rootStore}>
    <App />
  </Provider>,
);
