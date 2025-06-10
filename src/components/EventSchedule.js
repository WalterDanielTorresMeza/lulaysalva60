import React from 'react';
import './EventSchedule.css';

const schedule = [
  { time: '4:30 - 5:00 PM', title: 'Recepción' },
  { time: '5:00 - 6:00 PM', title: 'Comida' },
  { time: '6:30 PM',        title: 'Corte de pastel' },
  { time: '7:00 PM',        title: 'Baile' },
];

const EventSchedule = () => {
  return (
    <section className="event-schedule">
      <h2>Programa del Evento</h2>
      <ul className="schedule-list">
        {schedule.map((item, index) => (
          <li key={index} className="schedule-item">
            <span className="schedule-time">{item.time}</span>
            <span className="schedule-title">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventSchedule;
