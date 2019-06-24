/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import WeatherIcons from './WeatherIcons';

const smallInfo = {
  color: '#282828',
  fontWeight: 'bold',
};

const contStyle = {};

const tempStyle = {
  fontSize: '144px',
  marginBottom: '-20px',
};

const descStyle = {};

const otherStyle = {};

export default class Weather extends React.Component {
  getStyle = () => {
    const { desc } = this.props;
    return {
      background: desc === 'Clear' ? `blue` : 'red',
    };
  };

  checkIcon = desc => {
    return desc ? <WeatherIcons icon={desc} /> : '';
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
        <p style={smallInfo}>
          {formattedDate} <br />
          {city} {country}
        </p>
        <h1 style={tempStyle}>{temperature}</h1>
        <h2 style={descStyle}>
          {this.checkIcon(desc)} {desc}
        </h2>
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
