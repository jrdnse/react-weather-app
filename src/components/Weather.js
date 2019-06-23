/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const contStyle = {};

const tempStyle = {};

const descStyle = {};

const otherStyle = {};

export default class Weather extends React.Component {
  getStyle = () => {
    const { desc } = this.props;
    return {
      background: desc === 'Clear' ? 'blue' : 'red',
    };
  };

  render() {
    const {
      city,
      country,
      temperature,
      desc,
      humidity,
      sunrise,
      sunset,
      formattedDate,
    } = this.props;

    return (
      <Container style={contStyle}>
        <p>
          {formattedDate} <br />
          {city} {country}
        </p>
        <h1 style={tempStyle}>{temperature}</h1>
        <h2 style={descStyle}>{desc}</h2>
        <p style={otherStyle}>
          {humidity}
          <br /> {sunrise} <br />
          {sunset}
        </p>
      </Container>
    );
  }
}

Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.string,
  desc: PropTypes.string,
  humidity: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  formattedDate: PropTypes.string,
};
