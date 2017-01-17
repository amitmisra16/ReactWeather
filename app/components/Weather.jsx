var React = require('react');
var WeatherMessage = require('WeatherMessage')
var WeatherForm = require('WeatherForm')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleCityInput: function(c) {
    var that = this;
    this.setState({isLoading: true});
    debugger;
    openWeatherMap.getTemprature(c).then((temp) => {
      this.setState({
        cityName: c,
        weather: temp,
        isLoading: false
      });
    }, (errorMessage) => {
        this.setState({isLoading: false});
        alert(errorMessage);
    });

  },

  render: function() {
    var {cityName, weather, isLoading} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (cityName && weather) {
        return <WeatherMessage city={cityName} weather={weather} />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onCityNameInput={this.handleCityInput} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
