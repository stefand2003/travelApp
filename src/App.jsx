import './App.scss';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Trips from './components/Trips/Trips';
import Experience from './components/Experience/Experience';
import Testimonial from './components/Testimonials/Testimonial';
import JapanTrip from './components/JapanTrip/JapanTrip';
import FooterNotes from './components/FooterNotes/FooterNotes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Search />
      <div className='banner'>
        <p>Ready To Travel ?</p>
      </div>
      <Trips />
      <Experience />
      <Testimonial />
      <JapanTrip />
      <FooterNotes />
      <Footer />
    </div>
  );
}

export default App;
