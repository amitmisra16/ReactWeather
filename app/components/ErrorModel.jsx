var React = require('react');

var ErrorModel = React.createClass({
  getDefaultProps: function () {
      return({
        header: 'Error',
        summary: 'Error'
      });
  },

  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#errorModel'));
    modal.open();
  },

  propTypes: {
    title: React.PropTypes.string,
    summary: React.PropTypes.string,
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    var {header, summary, description} = this.props;
    return (
      <div className="tiny reveal" id="errorModel" data-reveal="">
        <h1>{header}</h1>
        <p className="lead">{summary}</p>
        <p>{description}</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

});

module.exports = ErrorModel;
