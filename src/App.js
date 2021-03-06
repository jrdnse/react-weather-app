import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Offline, Online } from 'react-detect-offline';
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
    is404: false,
  };

  getAlgolia = e => {
    this.setState({
      cityA: e.suggestion.name,
      countryA: e.suggestion.country,
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
      `https://api.openweathermap.org/data/2.5/weather?q=${cityA},${countryA}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    );

    const response = await apiCall.json();

    if (response.cod !== '404') {
      this.setState({
        is404: false,
      });
    } else {
      return this.setState({
        is404: true,
      });
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
        temperature: `${Math.trunc(response.main.temp)}\u2103`,
        humidity: `Humidity: ${response.main.humidity}%`,
        sunrise: `Sunrise: ${formattedSunrise}`,
        sunset: `Sunset: ${formattedSunset}`,
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
      is404,
    } = this.state;

    return (
      <React.Fragment>
        <Online>
          <Container>
            <Header loadAlgolia={this.getAlgolia} />
            <Weather
              is404={is404}
              desc={desc}
              temperature={temperature}
              humidity={humidity}
              sunrise={sunrise}
              sunset={sunset}
              city={city}
              country={country}
              formattedDate={formattedDate}
            />
          </Container>
        </Online>
        <Offline>
          <h1
            style={{
              fontSize: '72px',
              color: 'white',
              textAlign: 'center',
            }}
          >
            The app requires Internet access to work.
          </h1>
        </Offline>
      </React.Fragment>
    );
  }
}

export default App;
