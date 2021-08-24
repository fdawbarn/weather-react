
import "./App.css";
import Search from "./Search";
import ReactAnimatedWeather from "react-animated-weather";


import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Weather checker</h1>
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <br />
            <br />
            <div className="row">
              <div className="col">
                <Forecast day="Monday" />
              </div>
              <div className="col">
                <Forecast day="Tuesday" />
              </div>
              <div className="col">
                <Forecast day="Wednesday" />
              </div>
              <div className="col">
                <Forecast day="Thursday" />
              </div>
              <div className="col">
                <Forecast day="Friday" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Forecast value="22°C" />
              </div>
              <div className="col">
                <Forecast value="21°C" />
              </div>
              <div className="col">
                <Forecast value="20°C" />
              </div>
              <div className="col">
                <Forecast value="22°C" />
              </div>
              <div className="col">
                <Forecast value="23°C" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                 <ReactAnimatedWeather
        icon="CLOUDY"
        color="#757a79"
        size={40}
        animate={true}
      />

              </div>
              <div className="col">
                <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#fecd51"
        size={40}
        animate={true}
      />
              </div>
              <div className="col">
                <ReactAnimatedWeather
        icon="RAIN"
        color="#757a79"
        size={40}
        animate={true}
      />
              </div>
              <div className="col">
                <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#fecd51"
        size={40}
        animate={true}
      />
              </div>
              <div className="col">
                <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="#fecd51"
        size={40}
        animate={true}
      />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p> 
        <a href="https://github.com/fdawbarn/weather-react" target="_blank" rel="noreferrer">Open-source code, by Freya Dawbarn</a>
         </p>
    </div>
    
  );
}
