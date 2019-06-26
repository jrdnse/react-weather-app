import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  WiDaySunny,
  WiNightClear,
  WiRain,
  WiCloud,
  WiSnow,
  WiFog,
} from 'weather-icons-react';

export default class WeatherIcons extends Component {
  components = {
    Sunny: WiDaySunny,
    Clear: WiNightClear,
    Rain: WiRain,
    Clouds: WiCloud,
    Snow: WiSnow,
    Mist: WiFog,
  };

  render() {
    const { icon } = this.props;
    const Icon = this.components[icon];

    return <Icon size={200} color="#fff" className="weather-icon" />;
  }
}

WeatherIcons.propTypes = {
  icon: PropTypes.string.isRequired,
};
