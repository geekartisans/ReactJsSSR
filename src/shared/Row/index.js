import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Row.css';


export default class Row extends Component {

	render() {
		const { name } = this.props;
		return (
			<div className="Row">
				{ name }
			</div>
		);
	}
}
