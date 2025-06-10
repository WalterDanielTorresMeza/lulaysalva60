import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Countdown from './components/Countdown';
import EventLocation from './components/EventLocation';
import PhotoCarousel from './components/PhotoCarousel';
import FinalMessage from './components/FinalMessage';
import EventSchedule from './components/EventSchedule';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <Header />
      </div>


      <div data-aos="fade-up">
        <Countdown targetDate="2025-07-26T16:00:00" />
      </div>
      
      <div className="section-divider" />
      
      <div data-aos="zoom-in">
        <PhotoCarousel />
      </div>

      <div className="section-divider" />

      <div data-aos="fade-right">
        <EventSchedule />
      </div>

      <div className="section-divider" />

      <div data-aos="fade-left">
        <EventLocation />
      </div>

      <div data-aos="fade-up">
        <FinalMessage />
      </div>
    </div>
  );
}

export default App;
