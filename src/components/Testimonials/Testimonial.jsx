import React from 'react';
import './Testimonial.scss';

import Stars from '../../assets/Stars.svg';

export default function Testimonial() {
  return (
    <main className='testimonial'>
      <div className='testimonial__header'>
        <h3>TESTIMONIALS</h3>
        <h1>Read our Raving Reviews</h1>
        <h4>written by real travelers, just like you!</h4>
      </div>

      <div className='testimonial__topRow'>
        <ul className='testimonial__topRow--card'>
          <li className='customer'>
            <h2>Liam S.</h2>
          </li>
          <li className='location'>
            <h4>Hollywood, CA</h4>
          </li>
          <li className='description'>
            I booked a custom getaway to Paris at a great price and the website
            even helped me book tours and activities. The customer service was
            excellent and I was reimbursed for our lost luggage!
          </li>

          <li className='rating'>
            <img src={Stars} />
          </li>
        </ul>

        <ul className='testimonial__topRow--card'>
          <li className='customer'>
            <h2>Liam S.</h2>
          </li>
          <li className='location'>
            <h4>Hollywood, CA</h4>
          </li>
          <li className='description'>
            I booked a custom getaway to Paris at a great price and the website
            even helped me book tours and activities. The customer service was
            excellent and I was reimbursed for our lost luggage!
          </li>

          <li className='rating'>
            <img src={Stars} />
          </li>
        </ul>

        <ul className='testimonial__topRow--card'>
          <li className='customer'>
            <h2>Liam S.</h2>
          </li>
          <li className='location'>
            <h4>Hollywood, CA</h4>
          </li>
          <li className='description'>
            I booked a custom getaway to Paris at a great price and the website
            even helped me book tours and activities. The customer service was
            excellent and I was reimbursed for our lost luggage!
          </li>

          <li className='rating'>
            <img src={Stars} />
          </li>
        </ul>
      </div>

      <div className='testimonial__bottomRow'>
        <ul className='testimonial__topRow--card'>
          <li className='customer'>
            <h2>Liam S.</h2>
          </li>
          <li className='location'>
            <h4>Hollywood, CA</h4>
          </li>
          <li className='description'>
            I booked a custom getaway to Paris at a great price and the website
            even helped me book tours and activities. The customer service was
            excellent and I was reimbursed for our lost luggage!
          </li>

          <li className='rating'>
            <img src={Stars} />
          </li>
        </ul>

        <ul className='testimonial__topRow--card'>
          <li className='customer'>
            <h2>Liam S.</h2>
          </li>
          <li className='location'>
            <h4>Hollywood, CA</h4>
          </li>
          <li className='description'>
            I booked a custom getaway to Paris at a great price and the website
            even helped me book tours and activities. The customer service was
            excellent and I was reimbursed for our lost luggage!
          </li>

          <li className='rating'>
            <img src={Stars} />
          </li>
        </ul>
      </div>
    </main>
  );
}
