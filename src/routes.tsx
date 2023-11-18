import HomePage from './pages/HomePage';
import CharacterDetailPage from './pages/CharacterDetailsPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/character/:id',
    element: <CharacterDetailPage />,
  },
  {
    path: '/*',
    element: <h1>Страница не найдена</h1>,
  },
];

export default routes;
