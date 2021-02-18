import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles'; 
import CSS from 'csstype';

const GlobalStylesIsBroken: CSS.Properties = {
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	backgroundColor: "black",
	color: "#333",
	fontSize: "16px",
}

render(
	<div style={GlobalStylesIsBroken}>
		<GlobalStyles />
		<App/>
	</div>,
	document.getElementById('root')
);
