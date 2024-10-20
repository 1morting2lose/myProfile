import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import SubmissionSuccess from './SubmissionSuccess';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess data={formData} />;
  }

  return (
    <Container className="contact-section mt-5">
      <h2 className="text-center">Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mt-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-4">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" className="submit-button mt-4">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
