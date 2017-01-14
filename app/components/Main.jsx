var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
      <h2>Main Component</h2>
    </div>
  );
}

module.exports = Main;
