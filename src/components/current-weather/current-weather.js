import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const getWindDirection = (degrees) => {
    const directions = [
      "N",
      "NE",
      "E",
      "SE",
      "S",
      "SW",
      "W",
      "NW",
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const windDirection = getWindDirection(
    data.wind.deg
  );

  return (
    <>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="bottom">
          <div className="currtemp">
            <p className="temperature">
              {Math.round(data.main.temp)}°C
            </p>
            <h6 className="currentTemp">
              Current Temp
            </h6>
          </div>
          <div className="details ">
            <div className="parameter-row">
              <span className="parameter-label-details">
                Details
                <hr />
              </span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">
                Min and Max temp
              </span>
              <span className="parameter-value">
                {Math.round(data.main.temp_min)}
                °C,
                {Math.round(data.main.temp_max)}°C
              </span>
            </div>

            <div className="parameter-row">
              <span className="parameter-label">
                Humidity
              </span>
              <span className="parameter-value">
                {data.main.humidity}%
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">
                Wind speed
              </span>
              <span className="parameter-value">
                {data.wind.speed} m/s
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">
                Direction
              </span>
              <span className="parameter-value">
                {windDirection}
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">
                Description
              </span>
              <p className="weather-description">
                {data.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CurrentWeather;
