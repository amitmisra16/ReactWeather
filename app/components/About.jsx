var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>React Weather app created while doing Udemy course by Andrew Mead</p>
      <ol>
        <li><a href="https://github.com/amitmisra16/ReactWeather">Github Repository</a></li>
        <li><a href="http://openweathermap.org/city">OpenweatherMap</a></li>
        <li><a href="https://ancient-bastion-62453.herokuapp.com/">Heroku App</a></li>
      </ol>
    </div>
  );
}

module.exports = About;
