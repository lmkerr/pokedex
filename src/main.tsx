/* libraries */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

/* components */
import App from './app.tsx';

/* styles (generated from vite, should be moved to styled-components for consistency) */
import './index.css';

/* other */
import store from './state/store.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
