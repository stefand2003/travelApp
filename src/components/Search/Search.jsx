import React from 'react';
import './Search.scss';

import Chevron from '../../assets/chevron-down.svg';
import SearchIcon from '../../assets/Search.svg';

export default function Search() {
  return (
    <div className='search'>
      <ul className='search__location'>
        <ul className='header'>
          <li>Location</li>
          <li>
            <img src={Chevron} />
          </li>
        </ul>

        <li>Dubai, UAE</li>
      </ul>

      <ul className='search__date'>
        <ul className='header'>
          <li>Date</li>
          <li>
            <img src={Chevron} />
          </li>
        </ul>

        <li>Tue, Nov 10</li>
      </ul>

      <ul className='search__price'>
        <ul className='header'>
          <li>Price</li>
          <li>
            <img src={Chevron} />
          </li>
        </ul>

        <li>$523 - $849</li>
      </ul>

      <div className='search__icon'>
        <img src={SearchIcon} className='searchicon' />
      </div>
    </div>
  );
}
