import React from 'react';
import './Home.css';

const HeroContent = () => {
  return (
    <div className="home-content">
      <h1>TONY RIZZOTTO</h1>
      <p>
        Hello! My name is Tony Rizzotto and I'm a Boston-based full-stack web
        developer and educator. I've been developing websites and applications
        for close to 7 years. Currently, I'm looking for a new position.
      </p>
      <p>
        I currently work in the MERN technology stack: MongoDB, Express JS,
        React and NodeJS, however, I am very flexible with anything
        Javascript-based and have used Python for backend development, as well.
      </p>

      <img
        src={process.env.PUBLIC_URL + 'images/tonyhead.jpg'}
        alt="Headshot of Tony Rizzotto"
      />
      <hr />
    </div>
  );
};

export default HeroContent;
