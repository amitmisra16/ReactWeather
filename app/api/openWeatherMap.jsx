var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=bbec69cf1019f4cd0a33132069040b70';

module.exports = {

  getTemprature: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      if (response.data.cod && response.data.message) {
        console.log(response.data);
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }

    }, function(respone) {
      console.log(response.data);
      throw new Error(response.data.message);
    });

  }
}
