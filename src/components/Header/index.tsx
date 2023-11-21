import { FC } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
    <div>
      <h1>
        <Link to="/">Главная</Link>
      </h1>
    </div>
    </BrowserRouter>
  )
};

export default Header;
