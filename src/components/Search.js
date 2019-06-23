import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import AlgoliaSearch from './AlgoliaSearch';

export default function Search(props) {
  const { loadAlgolia } = props;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <AlgoliaSearch onChange={loadAlgolia} />
    </Form>
  );
}

Search.propTypes = {
  loadAlgolia: PropTypes.func.isRequired,
};
