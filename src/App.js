
import "./App.css";
import Search from "./Search";
import Location from "./Location";
import Updated from "./Updated";
import Current from "./Current";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div class="container">
      <div className="App">
        <h1>Weather checker</h1>
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Search />
            <br />
            <Location />
            <br />
            <h2>London</h2>
            <br />
            <Updated />
            <br />
            <Current />
            <br />
            <div class="row">
              <div class="col">
                <Forecast day="Monday" />
              </div>
              <div class="col">
                <Forecast day="Tuesday" />
              </div>
              <div class="col">
                <Forecast day="Wednesday" />
              </div>
              <div class="col">
                <Forecast day="Thursday" />
              </div>
              <div class="col">
                <Forecast day="Friday" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <Forecast value="22°C" />
              </div>
              <div class="col">
                <Forecast value="21°C" />
              </div>
              <div class="col">
                <Forecast value="20°C" />
              </div>
              <div class="col">
                <Forecast value="22°C" />
              </div>
              <div class="col">
                <Forecast value="23°C" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
