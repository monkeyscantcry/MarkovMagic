const React = require('react/addons');

import './Timer.scss';

var timeout;
var time;

export const Timer = React.createClass({
  getInitialState: function () {
    return {
      seconds: this.props.time
    }
  },
  componentDidMount: function () {
    time = this.props.time;

    timeout = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({seconds: this.state.seconds - 1})
      }
    }, 1000)
  },
  componentDidUpdate: function (lastProps, lastState) {
    if (time !== this.props.time) {
      time = this.props.time;

      clearInterval(timeout);

      this.setState({seconds: this.props.time});

      timeout = setInterval(() => {
        if (this.state.seconds > 0) {
          this.setState({seconds: this.state.seconds - 1})
        }
      }, 1000)
    }
  },
	render: function () {
		const that = this;
		return (
			<div className={ 'timer' + (this.state.seconds < 15? ' danger' : '')}>
        { this.state.seconds }
			</div>
		)
	}
})
