import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [state, setState] = useState({weather: {}, city: ''})

  const handleChangeWeather = (weatherData, city) => {
    setState({ weather: weatherData, city: city });
  };

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather city={state.city} weather={state.weather} />
    </div>
  );
}

export default App;

/* class App extends Component {

  state = {
    weather: {},
    city: "",
  };

  handleChangeWeather = (weatherData, city) => {
    this.setState({ weather: weatherData, city: city });
  };

  render() {
    return (
      <div className="App">
        <SearchWeather handleChangeWeather={this.handleChangeWeather} />
        <DisplayWeather city={this.state.city} weather={this.state.weather} />
      </div>
    );
  }
} */


