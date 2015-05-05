const React = require('react/addons');

import { Card } from '../Card';

export const Pool = React.createClass({
	render: function () {
		const that = this;
		return (
			<div>
				{
					that.props.contents.map(function (card) {
						return <Card name={ card.name } imgSrc={ card.src } count={ card.quantity } />
					})
				}
			</div>
		)
	}
})