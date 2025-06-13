import React from 'react';
import './EventLocation.css';

const EventLocation = () => {
  return (
    <section className="event-location">
      <h2>Lugar del Evento</h2>
      <p className="location-name">Quinta de Leonarda</p>
      <p className="location-address">Zona Centro, 98100 Morelos, Zacatecas</p>
      <p className="event-date-time">26 de Julio de 2025 · 4:30 PM</p>

      <a
        href="https://www.google.com/maps?q=Privada+Del+Bordo+111,+Zona+Centro,+98100+Morelos,+Zacatecas"
        target="_blank"
        rel="noopener noreferrer"
        className="event-image-link"
      >
        <img
          src="/quinta.jpg"
          alt="Imagen del lugar del evento"
          className="event-location-image"
        />
      </a>
    </section>
  );
};

export default EventLocation;
