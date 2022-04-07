import "./style.css";

const DisplayWeather = ({city,weather}) => {
  
  return (

    <div className="display-container">
      <div className="display-city">{city}</div>
      <div className="display-temperature">{weather.temperature}</div>
    </div>
  
  );
}

export default DisplayWeather;

/* class DisplayWeather extends Component {
  render() {
    const { weather, city } = this.props.info;
    return (
      <div className="display-container">
        <div className="display-city">{city}</div>
        <div className="display-temperature">{weather.temperature}</div>
      </div>
    );
  }
} */


