import React, {useState} from 'react';
import './index.css';
const api = {
  key: "99b281fd6c6738eab7981bf9299fc245",
  base: "https://api.openweathermap.org/data/2.5/",
  image: "http://openweathermap.org/img/wn/"
}

function App() {
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState({});
  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  return (
    <div className="App">
      <main>
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        
      </div>
      { weather.main ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}</div>
            <div className="date">{date}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {weather.main.temp}°C
            </div>
            <div className="weather"><img src={`${api.image}/${weather.weather[0].icon}@2x.png`} /></div>
            
          </div>
        </div>
      ) : <h1 style={{color: "white"}}>Search for a city to get it's weather data</h1> }
    </main>
    </div>
  );
}

export default App;
