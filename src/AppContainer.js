import React from 'react';
import {connect} from 'react-redux';

import App from './App'

import {login , registration , isLog} from './reducers/menu-reducer'

class AppContainer extends React.Component {
	componentDidMount() {
	
	}

	render() {
		return <App 
			{...this.props} 
			menuPage={this.props.menuPage} 
			login={this.props.login}
			registration={this.props.registration}	
		/>
	}
}

const mapStateToProps = (store) => {
	return {
		menu: {...store},
		form: store.menuPage.registrationForm
	}
}

export default connect(mapStateToProps , {
	login,
	registration,
	isLog
})(App)