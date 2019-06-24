import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';

export default function Header(props) {
  const { loadAlgolia } = props;

  return (
    <Container style={{ paddingBottom: '40px', paddingTop: '20px' }}>
      <Row className="justify-content-md-center">
        <Col>
          <Search loadAlgolia={loadAlgolia} />
        </Col>
        <Col md="auto">
          <h3>C/F switch</h3>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {
  loadAlgolia: PropTypes.func.isRequired,
};
