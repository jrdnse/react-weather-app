import React from 'react';
import { Container } from 'react-bootstrap';

export default function NotFound() {
  return (
    <Container>
      <h1 style={{ color: 'white', fontSize: '68px' }}>
        We have no weather information for this place.
      </h1>
    </Container>
  );
}
