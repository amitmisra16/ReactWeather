var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>React Weather app created while doing Udemy course by Andrew Mead</p>
      <ol>
        <li><Link to="https://github.com/amitmisra16/ReactWeather">Github Repository</Link></li>
        <li><Link to="http://openweathermap.org/city">OpenweatherMap</Link></li>
        <li><Link to="https://ancient-bastion-62453.herokuapp.com/">Heroku App</Link></li>
      </ol>
    </div>
  );
}

module.exports = About;
