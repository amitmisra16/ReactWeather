var React = require('react');

var WeatherForm = React.createClass({

  handleInput: function(e) {
    e.preventDefault();
    var cityName = this.refs.city.value;
    console.log(cityName);
    if ( typeof cityName == 'string' && cityName.length > 0 ) {
        this.refs.city.value = '';
        this.props.onCityNameInput(cityName);
    }

  },

  render: function() {
    return(
      <div>
        <form onSubmit={this.handleInput}>
          <div>
              <input type='text' placeholder='Enter City Name' ref='city'/>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
