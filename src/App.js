import React from 'react';
import Weather from './component/weather';
import 'weather-icons/css/weather-icons.css';
import Search from './component/search';
// import './App.css';

const apiKey = '444d119ef9c952fbadbe12e81a1be294';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      icon: undefined,
      minTemp: '',
      maxTemp: '',
      desc: '',
      error: false

    };
    // this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  calCelsius(temp) {
    let cel = Math.floor(temp - 273.15)
    return cel;
  }

  getWi(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async (event) => {

    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if (city && country) {
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
      const response = await apiCall.json();
      console.log(response);

      this.setState({
        city: `${response.name},${response.sys.country}`,

        temp: this.calCelsius(response.main.temp),
        icon: this.weatherIcon.Thunderstorm,
        minTemp: this.calCelsius(response.main.temp_min),
        maxTemp: this.calCelsius(response.main.temp_max),
        desc: response.weather[0].description
      });
      this.getWi(this.weatherIcon, response.weather[0].id)
    }
    else {
      this.setState({ error: true });
    }

  };

  render() {
    return (
      <div className='weather center'>
        <Search
          loadweather={this.getWeather} error={this.state.error}
        />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          weatherIcon={this.state.icon}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          desc={this.state.desc}
        />
      </div>
    )
  }
}






export default App;
