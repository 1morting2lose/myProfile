import React from 'react';
import { Container, Card } from 'react-bootstrap';

const SubmissionSuccess = ({ data }) => {
  return (
    <Container className="mt-5 submission-success">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Thank you, {data.name}!</Card.Title>
          <Card.Text>Your message has been sent successfully.</Card.Text>
          <hr />
          <h5>Submitted Information:</h5>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Message:</strong> {data.message}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SubmissionSuccess;
