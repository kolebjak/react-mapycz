import React from 'react';
import {render} from 'react-dom';
import App from './src/App';

render(<App
	scriptUrl="https://api.mapy.cz/loader.js"/>, document.getElementById('root'));