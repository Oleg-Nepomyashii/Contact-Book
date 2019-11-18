import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';
import shortid from 'shortid';
import {connect} from 'react-redux';

import {getContactId} from '../../reducers/contacts-reducer';

import ContactList from './contacts/ContactList'

const style = StyleSheet.create({
	contacts_wrapper: {
		minHeight: '568px',
		margin: '0 auto',
		minWidth: '320px',
		maxWidth: '1046px',
		backgroundColor: '#EFEBE4',
		height:'100vh',
	}
})

class ContactsWrapper extends React.Component {
	render() {
		let current = this.props.currentCategorie;
		let contacts = this.props.contactsList;

		const currentContacts = current === 'All Contacts'
			? contacts
			: contacts.filter(item => item.category === current)
		return (
			<div className={classNames(css(style.contacts_wrapper))}>
				<ContactList 
					contacts = {currentContacts}
					title = {current}
					getContactId = {this.props.getContactId}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contactsList : state.contactsPage.contacts,
		currentCategorie: state.contactsPage.currentCategory
	}
}

export default connect(mapStateToProps,{
	getContactId
})(ContactsWrapper)