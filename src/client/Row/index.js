import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Row.css';


export default ({ name }) => (
	<span className="Row">
		{ name }
	</span>
);
