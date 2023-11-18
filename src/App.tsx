import Header from './components/Header';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { FC } from 'react';
import routes from './routes';
import './App.css';

const App: FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  )
};

export default App;
