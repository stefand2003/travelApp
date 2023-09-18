import React from 'react';
import './Nav.scss';
import Chevron from '../../assets/chevron-down.svg';
import Logo from '../../assets/Logo1.svg';

export default function Nav() {
  return (
    <nav className='nav'>
      <img src={Logo} className='nav__logo' />

      <ul className='nav__links'>
        <li className='home'>Home</li>
        <li>About</li>

        <ul className='nav__links--choose'>
          <li>Trips</li>
          <li>
            <img src={Chevron} />
          </li>
        </ul>

        <li>Services</li>
      </ul>

      <div className='nav__buttons'>
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
}
