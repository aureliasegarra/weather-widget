import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';

const Widget = ({ city, zipcode }) => {
  const [temperature, setTemperature] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
      .then(response => {
        // je vais stocker la valeur de la temperature dans le state
        console.log('response', response);
        const temp = Math.round(response.data.main.temp);
        setTemperature(temp);
        setIcon(response.data.weather[0].icon)
      });
  }, [city]);

  if (temperature === undefined) {
    return (
      <div className="weather-widget">
        <div className="weather-widget__loading">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="weather-widget">
      <div className="weather-widget__container">
        <div className="weather-widget__content">
          <p className="weather-widget__city">{city}</p>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icon"/>
        </div>
        <p className="weather-widget__temperature">{temperature}°</p>
      </div>
    </div>
  );
};

Widget.propTypes = {
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
};

export default Widget;