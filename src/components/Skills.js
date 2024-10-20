import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'CSS', 'Node.js', 'Git'];

  return (
    <Container className="mt-5 skills-section">
      <h2>My Skills</h2>
      <ListGroup variant="flush">
        {skills.map((skill, index) => (
          <ListGroup.Item key={index} className="skill-item">• {skill}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Skills;
