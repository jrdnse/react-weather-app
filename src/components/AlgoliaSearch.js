import React, { Component } from 'react';
import PropTypes from 'prop-types';

const places = require('places.js');

export default class AlgoliaSearch extends Component {
  componentDidMount() {
    const { onChange } = this.props;

    const placesAutocomplete = places({
      container: this.algoliaSearch,
    }).configure({
      type: 'city',
    });

    placesAutocomplete.on('change', onChange);
  }

  render() {
    const style = {
      borderRadius: '20px',
    };
    return (
      <div>
        <input
          style={style}
          type="text"
          ref={as => {
            this.algoliaSearch = as;
          }}
          placeholder="Enter your city..."
        />
      </div>
    );
  }
}

AlgoliaSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};
