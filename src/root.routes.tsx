/* library */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

/* components */
const PokemonDetails = lazy(() => import('./search/details/pokemon-details'));
const App = lazy(() => import('./app'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pokemon/:name',
    element: <PokemonDetails />,
  },
]);

export default router;
