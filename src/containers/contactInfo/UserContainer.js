import React from 'react';
import {connect} from 'react-redux';
import UserInformation from './UserInformation';


class UserContainer extends React.Component {
	render() {
		return (
			<UserInformation 
				contact={this.props.contact}
			/>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		contact: state.contactsPage.showById,
		showById: state.showById
	}
}

export default connect(mapStateToProps,)(UserContainer)