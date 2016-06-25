var React = require('react');

var App = React.createClass({
  render(){
    return(
      <div>
        <span>Hello {this.props.data.name} !</span>
      </div>
    );
  }
});

module.exports = App;
