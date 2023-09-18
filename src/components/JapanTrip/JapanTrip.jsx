import React from 'react';
import './JapanTrip.scss';

import Location from '../../assets/location-pin-svgrepo-com.svg';
import Japan from '../../assets/Japan.svg';

export default function JapanTrip() {
  return (
    <section className='japan'>
      <img src={Japan} className='japan__image' />

      <main className='japan__info'>
        <ul className='tokyoMarker'>
          <li>
            <img src={Location} />
          </li>

          <li>Kyoto, Japan</li>
        </ul>

        <div className='tokyoInfo'>
          <h1>See the world</h1>
          <h2>It's yours to explore</h2>
          <button>Get started</button>
        </div>
      </main>
    </section>
  );
}
