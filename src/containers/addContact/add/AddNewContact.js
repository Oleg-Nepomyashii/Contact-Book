import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import AddContactHeader from './AddContactHeader';

import icon from '../../../icons/1.png';


const style = StyleSheet.create({
	new_contact_wrapper: {
		margin: '0 auto',
		minHeight: '100vh',
		minWidth: '320px',
		maxWidth: '1046px',
		backgroundColor: '#EFEBE4'
	},
	add_form: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		margin: '0 5%'
	},
	input_avatar: {
		display: 'none',
	},
	userAvatar: {
		background: `url(${icon})`,
		width: '128px',
		padding: '47px 41px',
		borderRadius: '50%',
		position: 'absolute',
		top: '17px',
		left: 'calc(50% - 64px)',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '9.8px',
		lineHeight: '11px',
		textAlign: 'center',
		color: '#22282D'
	},
	input: {
		width: '100%',
		height: '37px',
		fontSize: '16px',
		lineHeight: '24px',
		border: 'transparent',
		borderBottom: '1px solid rgba(52, 70, 82, 0.5)',
		background: 'transparent',
		color: '#101F2A',
		'&:focus': {
			border: '1px solid #FFB143',
			outline: 'none'
		}
	},
	field: {
		position: 'relative',
		marginBottom: '32px',
		'&:nth-child(2)': {
			marginTop: '168px'
		}
	},
	label: {
		position: 'absolute',
		fontSize: '12px',
		lineHeight: '12px',
		color: 'rgba(52, 70, 82, 0.5)'
	},
	add_textarea: {
		width: '100%',
		height: '84px',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '24px',
		border: 'transparent',
		borderBottom: '1px solid rgba(52, 70, 82, 0.5)',
		background: 'transparent',
		color: '#101F2A',
		'&:focus': {
			border: '1px solid #FFB143',
			outline: 'none'
		}

	},
	add_contact_btn: {
		height: '32px',
		width: '134px',
		marginLeft: 'calc(50% - 67px)',
		borderRadius: '56px',
		background: 'transparent',
		border: '1px solid #101F2A',
		marginBottom: '32px'
	}	
})


const AddNewContact = (props) => {
	return (
		<div className={classNames(css(style.new_contact_wrapper))}>
			<AddContactHeader />
			<form onSubmit={props.addNewContact} className={classNames(css(style.add_form))}>

				<label className={classNames(css(style.userAvatar))} htmlFor="file">
					Click for upload photo
					<input className={classNames(css(style.input_avatar))}  type="file" name="image"/>
				</label>


				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="name">Name</label>	
					<input  id="name" className={classNames(css(style.input))} type="text" name="name" placeholder="Type something"/>
				</div>
				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="surName">Surname</label>	
					<input  id="surName" className={classNames(css(style.input))} type="text" name="surname" placeholder="Your surname here"/>
				</div>

				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="phone">Phone</label>	
					<input id="phone" className={classNames(css(style.input))}type="tel" name="phone" />
				</div>

				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="email">Email</label>	
					<input  id="email" className={classNames(css(style.input))} type="email" name="email" />
				</div>

				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="bday">Birthday</label>	
					<input id="bday" className={classNames(css(style.input))} type="date" name="birthday" />
				</div>

				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="insta">Instagram</label>	
					<input id="insta" className={classNames(css(style.input))} type="text" name="instagram" />
				</div>

				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="facebook">Facebook</label>	
					<input id="facebook" className={classNames(css(style.input))} type="text" name="facebook" />
				</div>

				<div className={classNames(css(style.field))}>
					<label className={classNames(css(style.label))} htmlFor="info">Information</label>	
					<input  id="info" className={classNames(css(style.add_textarea))} type="textarea" name="information"/>
						
				</div>

				<button className={classNames(css(style.add_contact_btn))}>SAVE</button>
			</form>

		</div>
	)
}

export default AddNewContact

