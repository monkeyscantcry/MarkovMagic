const React = require('react/addons');

import './Timer.scss';

var timeout;

export const Timer = React.createClass({
  getInitialState: function () {
    return {
      seconds: this.props.time
    }
  },
  componentDidMount: function () {
    timeout = setInterval(() => {
      this.setState({seconds: this.state.seconds - 1})
    }, 1000)
  },
	render: function () {
		const that = this;
		return (
			<div className='timer'>
        { this.state.seconds }
			</div>
		)
	}
})
