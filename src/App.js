import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/scss/styles.scss';

import AnimatedSwitch from './assets/scripts/routes';

class App extends Component {

	render() {
		return (
			<BrowserRouter basename={'/'}>
				<AnimatedSwitch />
			</BrowserRouter>
		);
	}
}

export default App;