var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="grid-x grid-padding-x">
        <div className="large-6 medium-6 cell centered">
              {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
