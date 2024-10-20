import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="p-5 mb-4 bg-light rounded-3 home-section">
      <h1>Welcome to my page!</h1>
      <p>
       Hi, I am Albertstein A. Rabin, a 20-year-old, 3rd-year computer science student studying in the day and working at night.
       Interested about me? Click the about page. Wanna know what I can do? Check the skills section.
       Wanna reach me? Just go to my contact page and message me. See you around!
      </p>
    </Container>
  );
};

export default Home;
