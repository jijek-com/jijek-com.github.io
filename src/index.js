import React from 'react';
import ReactDOM from 'react-dom/client';

import { ModalProvider } from './context//modal-context';
import { ThemeProvider } from './context/theme-context';

import './index.scss';
import App from './App';

import * as serviceWorker from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
);

serviceWorker.register();