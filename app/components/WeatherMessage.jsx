var React = require('react');

var WeatherMessage = (props) => {
  if (props.city.length > 0 && props.weather != 'UNKNOWN') {
    return (<p>The weather of city {props.city} is {props.weather}</p>);
  } else {
    return (<p></p>);
  }
}

module.exports = WeatherMessage;
