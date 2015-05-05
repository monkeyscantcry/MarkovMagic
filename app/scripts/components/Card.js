const React = require('react/addons');

import './Card.scss';

export const Card = React.createClass({
	render: function () {
		const that = this;
		return (
			<div className='card'>
				<img src={ that.props.imgSrc } />
				<div className='card-name'>
					{ that.props.name }
				</div>
				<div className='card-count'>
					x{ that.props.count }
				</div>
			</div>
		)
	}
})
