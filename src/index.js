import ReactDOM from 'react-dom/client';

import { ModalProvider } from './context//modal-context';

import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);

