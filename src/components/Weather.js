/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import WeatherIcons from './WeatherIcons';
import NotFound from './NotFound';

const smallInfo = {
  fontWeight: 'bold',
};

const contStyle = {
  color: 'white',
};

const tempStyle = {
  fontSize: '144px',
  marginBottom: '-20px',
};

export default class Weather extends React.Component {
  checkIcon = desc => {
    return desc ? <WeatherIcons icon={desc} /> : '';
  };

  cityExists = bool => {
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
    return bool ? (
      <NotFound />
    ) : (
      <Container style={contStyle}>
        <p style={smallInfo}>
          {formattedDate} <br />
          {city} {country}
        </p>
        <h1 style={tempStyle}>{temperature}</h1>
        <h2 className="desc-icon">
          {desc} {this.checkIcon(desc)}
        </h2>

        <p className="smallText">
          {humidity}
          <br />
          {sunrise}
          <br />
          {sunset}
        </p>
      </Container>
    );
  };

  render() {
    const { is404 } = this.props;
    return this.cityExists(is404);
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
  is404: PropTypes.bool,
};
