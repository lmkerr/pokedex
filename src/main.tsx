/* libraries */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider } from 'react-router-dom';

/* components */
import Loading from './components/loading.tsx';

/* styles (generated from vite, should be moved to styled-components for consistency) */
import './index.css';

/* other */
import { store, persistedStore } from './state/store.tsx';
import rootRoutes from './root.routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Suspense fallback={<Loading></Loading>}>
          <RouterProvider
            router={rootRoutes}
            fallbackElement={<p>Loading...</p>}
          />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
