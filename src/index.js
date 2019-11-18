import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import AppContainer from './AppContainer';

import * as serviceWorker from './serviceWorker';

import store from './store/reduxStore';


ReactDOM.render(
	<Provider store={store}>	
		<AppContainer />
	</Provider>, 
	document.getElementById('root')
);





serviceWorker.unregister();
