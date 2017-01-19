var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModel = require('ErrorModel');

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleCityInput: function(c) {
    var that = this;
    this.setState(
      {
        isLoading: true,
        isError: undefined,
        cityName: undefined,
        weather: undefined
      }
    );
    debugger;
    openWeatherMap.getTemprature(c).then((temp) => {
      this.setState({
        cityName: c,
        weather: temp,
        isLoading: false
      });
    }, (e) => {
        this.setState(
          {
            cityName: c,
            isLoading: false,
            isError: e.message
          }
        );
    });

  },

  componentDidMount: function () {
    var location = this.props.location.query.cityName;
    if ( location && location.length > 0 ) {
      this.handleCityInput(location);
      window.location.hash = "#/";
    }
  },


  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.cityName;
    if ( location && location.length > 0 ) {
      this.handleCityInput(location);
      window.location.hash = "#/";
    }
  },

  render: function() {
    var {cityName, weather, isLoading,isError} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (cityName && weather) {
        return <WeatherMessage city={cityName} weather={weather} />;
      }
    }

    function renderErrorModel() {
      var summary = 'Unable to fetch weather for city ' + cityName;
      if( typeof isError === 'string' ) {
        return (
          <ErrorModel header='Get Weather' summary={summary} description={isError}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onCityNameInput={this.handleCityInput} />
        {renderMessage()}
        {renderErrorModel()}
      </div>
    );
  }
});

module.exports = Weather;
