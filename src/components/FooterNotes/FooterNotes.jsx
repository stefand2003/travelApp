import React from 'react';
import './FooterNotes.scss';

import Logo from '../../assets/Logo2.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import LinkedIn from '../../assets/linkedin.svg';

export default function FooterNotes() {
  return (
    <div className='background'>
      <main className='footer'>
        <img src={Logo} />

        <section className='footer__links'>
          <div className='linkColumn'>
            <h3>About us</h3>
            <ul>
              <li>About us</li>
              <li>Creators</li>
              <li>Philosophy</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className='linkColumn'>
            <h3>Company</h3>
            <ul>
              <li>Our team</li>
              <li>Terms</li>
              <li>How it works</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className='linkColumn'>
            <h3>Services</h3>
            <ul>
              <li>Flights</li>
              <li>Planning</li>
              <li>Hotels</li>
              <li>Booking</li>
            </ul>
          </div>

          <div className='linkColumn-Last'>
            <h3>Check us out</h3>
            <ul>
              <li>
                <img src={Facebook} />
              </li>
              <li>
                <img src={Instagram} />
              </li>
              <li>
                <img src={LinkedIn} />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
