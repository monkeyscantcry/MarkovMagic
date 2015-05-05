const React = require('react/addons');

import './Card.scss';

export const Card = React.createClass({
	render: function () {
		const that = this;
		var images = [];
		for (var i = 0; i < that.props.count; i++) {
			images.push(
				<img src={ that.props.imgSrc } style={{ top: i*25 + 'px' }}/>
			)
		}
		return (
			<div className='card'>
				{ images }
				<div className='card-info' style={{ top: that.props.count*25 + 15 + 'px' }}>
					{ that.props.name } x{ that.props.count }
				</div>
			</div>
		)
	}
})
