const React = require('react/addons');

import './User.scss';

export const User = React.createClass({
	render: function () {
		const that = this;
		return (
			<div className='user'>
        { this.props.name }
        <small>{ this.props.vetos } Vetos Remaining</small>
			</div>
		)
	}
})
