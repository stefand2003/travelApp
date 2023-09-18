import React from 'react';
import './Experience.scss';

import Thailand from '../../assets/Thailand.svg';
import Joshua from '../../assets/JoshuaTree.svg';
import Stars from '../../assets/Stars.svg';
import Star from '../../assets/Starr.svg';

export default function Experience() {
  return (
    <main className='experience'>
      <div className='experience__header'>
        <h4>OUR EXPERIENCE</h4>

        <ul className='experience__header--BgTitle'>
          <li>Trusted for years, </li>
          <li>by travelers like you.</li>
        </ul>

        <p>
          Travel with piece of mind with one of our customized travel packages
          to fit your specific needs and interests.
        </p>

        <div className='experience__header--figures'>
          <ul className='customers'>
            <li>Happy Customers</li>
            <li>50M +</li>
          </ul>

          <ul className='yearsExperience'>
            <li>Years of Experience</li>
            <li>22+</li>
          </ul>

          <ul className='rewards'>
            <li>Awards Won</li>
            <li>65+</li>
          </ul>
        </div>
      </div>

      <div className='experience__cards'>
        <ul className='ThaiCard'>
          <li>
            <img src={Thailand} />
          </li>

          <ul className='ThaiCard__banner'>
            <li>THAILAND</li>
            <li>
              <img src={Stars} />
            </li>
          </ul>
        </ul>

        <ul className='ThaiCard'>
          <li>
            <img src={Joshua} />
          </li>

          <ul className='ThaiCard__banner'>
            <li className='Joshua-title'>JOSHUA TREE</li>
            <li>
              <img src={Star} />
            </li>
          </ul>
        </ul>
      </div>
    </main>
  );
}
