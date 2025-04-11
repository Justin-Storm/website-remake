import React, { useRef } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import SportsCards from './components/sportsCards';
import FeaturedShoe from './components/featuredShoe';
import Classics from './components/classics';
import Footer from './components/footer';
import nikeLogo from './components/images/logo.png'

function App() {
  const shoesRef = useRef(null);

  const scrollShoes = (direction) => {
    const container = shoesRef.current;
    const scrollAmount = 310;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='app-content'>
        <div className='sports-cards'>
          <SportsCards />
        </div>
        <FeaturedShoe />
        <div className='classics-container'>
          <h3>Shop The Classics</h3>
          <button className="arrow back" onClick={() => scrollShoes('left')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          </button>
          <button className="arrow forward" onClick={() => scrollShoes('right')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
          </button>
          <div className='shoes' ref={shoesRef}>
            <div className='snap-spacer'></div>
            <Classics />
          </div>
        </div>
        <div className="sticky-links">
          <img src={nikeLogo} alt='logo' />
          <div className='links'>
            <a href='#'>Find a Store</a>
            <a href='#'>Help</a>
            <a href='#'>Join Us</a>
            <a href='#'>Sign In</a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;