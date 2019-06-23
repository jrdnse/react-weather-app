import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';

class App extends Component {
  state = {
    desc: undefined,
    temperature: undefined,
    humidity: undefined,
    sunrise: undefined,
    sunset: undefined,
    city: undefined,
    country: undefined,
    cityA: undefined,
    countryA: undefined,
    formattedDate: undefined,
  };

  getAlgolia = e => {
    this.setState({
      cityA: e.suggestion.name,
      countryA: e.suggestion.country,
      // fix this to make it check if the field is empty cleared instead
    });
    this.getWeather();
  };

  getWeather = async () => {
    let { cityA } = this.state;
    const { countryA } = this.state;

    if (cityA.includes('æ')) {
      cityA = cityA.replace('æ', 'ae');
    }

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityA},${countryA}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    );

    const response = await apiCall.json();

    if (response.cod === '404') {
      return;
    }

    if (cityA && countryA) {
      const sunrise = new Date(response.sys.sunrise * 1000);
      const sunset = new Date(response.sys.sunset * 1000);

      const formattedSunrise = sunrise.toString().slice(16, 21);
      const formattedSunset = sunset.toString().slice(16, 21);
      const date = new Date();
      const formattedDate = date.toUTCString().slice(0, 17);

      this.setState({
        desc: response.weather[0].main,
        temperature: `${Math.trunc(response.main.temp)}C`,
        humidity: `${response.main.humidity}%`,
        sunrise: formattedSunrise,
        sunset: formattedSunset,
        city: `${response.name},`,
        country: response.sys.country,
        formattedDate,
      });
    }
  };

  render() {
    const {
      desc,
      temperature,
      humidity,
      sunrise,
      sunset,
      city,
      country,
      formattedDate,
    } = this.state;
    return (
      <React.Fragment>
        <Header loadAlgolia={this.getAlgolia} />
        <Weather
          desc={desc}
          temperature={temperature}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
          city={city}
          country={country}
          formattedDate={formattedDate}
        />
      </React.Fragment>
    );
  }
}

export default App;
