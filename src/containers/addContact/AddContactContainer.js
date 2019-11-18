import React from 'react';
import { connect } from 'react-redux'

import AddNewContact  from './add/AddNewContact';

import {addContact} from '../../reducers/contacts-reducer'


class AddContactContainer extends React.Component {
	componentDidMount () {

	}

	render() {
		return (
			<AddNewContact 
				contacts={this.props.contacts}
				addNewContact={this.props.addContact}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contacts: state.contactsPage.contacts
	} 
}

export default connect (mapStateToProps, {
	addContact
})(AddContactContainer)
