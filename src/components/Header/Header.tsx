import React from 'react';
import logo from '../../images/Logo.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Logo" className="header__logo" />
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__item">
              <a href="#users" className="nav__link button">Users</a>
            </li>
            <li className="nav__item">
              <a href="#signUp" className="nav__link button">Sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
