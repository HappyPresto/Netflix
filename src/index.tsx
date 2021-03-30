import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles'; 
import CSS from 'csstype';
import { firebase } from './lib/firebase.prod';
import FirebaseContext from './context/firebase';

const GlobalStylesIsBroken: CSS.Properties = {
	fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
	backgroundColor: "black",
	color: "#333",
	fontSize: "16px",
}

render(
	<div style={GlobalStylesIsBroken}>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App/>
		</FirebaseContext.Provider>
	</div>,
	document.getElementById('root')
);
