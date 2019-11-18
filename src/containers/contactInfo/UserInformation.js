import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import UserInformationHeader from './UserInformationHeader';

import icon from '../../icons/1.png'

const style = StyleSheet.create({
	userCard_wrapper: {
		minHeight: '100vh',
		margin: '0 auto',
		minWidth: '320px',
		maxWidth: '1046px',
		backgroundColor: '#EFEBE4'
	},
	userInfo_section:{
		margin: '16px 3% 0',
	},
	userPhoto: {
		width: '128px',
		height: '128px',
		border: '2px solid #FFB143',
		borderRadius: '50%',
		margin: '0 calc(50% - 64px)'
	},
	userName:{
		margin: '24px 0 0',
		textAlign: 'center',
		fontWeight: 'normal',
		fontSize: '24px',
		lineHeight: '24px',
		color: '#101F2A'
	},
	aboutUser: {
		textAlign: 'center',
		color: '#344652'
	},
	user_contacts:{
		display: 'flex',
		flexDirection: 'column',
		margin: '32px 5% 0'
	},
	user_number: {
		lineHeight: '24px',
		color: '#101F2A',
		position: 'relative',
		'&:before': {
			content: "'Phone'",
			position: 'absolute',
			top: '-10px',
			left: '0',
			fontSize: '12px',
			lineHeight: '12px',
			color: 'rgba(52, 70, 82, 0.5)'
		},
		textDecoration: 'none',
		margin: '18px 0',
	},
	user_mail: {
		lineHeight: '24px',
		color: '#101F2A',
		position: 'relative',
		'&:before': {
			content: "'Email'",
			position: 'absolute',
			top: '-10px',
			left: '0',
			fontSize: '12px',
			lineHeight: '12px',
			color: 'rgba(52, 70, 82, 0.5)'
		},
		textDecoration: 'none',
		margin: '18px 0',
	},
	user_bday: {
		lineHeight: '24px',
		color: '#101F2A',
		position: 'relative',
		'&:before': {
			content: "'Birthday'",
			position: 'absolute',
			top: '-10px',
			left: '0',
			fontSize: '12px',
			lineHeight: '12px',
			color: 'rgba(52, 70, 82, 0.5)'
		}
	},
	user_insta: {
		lineHeight: '24px',
		color: '#101F2A',
		position: 'relative',
		'&:before': {
			content: "'Instagram'",
			position: 'absolute',
			top: '-10px',
			left: '0',
			fontSize: '12px',
			lineHeight: '12px',
			color: 'rgba(52, 70, 82, 0.5)'
		},
		textDecoration: 'none',
		margin: '18px 0',
	},
	user_facebook: {
		lineHeight: '24px',
		color: '#101F2A',
		position: 'relative',
		'&:before': {
			content: "'Facebook'",
			position: 'absolute',
			top: '-10px',
			left: '0',
			fontSize: '12px',
			lineHeight: '12px',
			color: 'rgba(52, 70, 82, 0.5)'
		},
		textDecoration: 'none',
		margin: '18px 0',
	},
	user_photos: {
		margin: '0 7.5% 16px',
		display: 'grid',
		gridGap: '16px',
		gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))'
	},
	user_images: {
		height: '128px',
		width: '128px'
	}



})

const UserInformation = (props) => {
	const user = props.contact[0]
	return(
		<div className={classNames(css(style.userCard_wrapper))}>
			<UserInformationHeader title={`${user.name} ${user.surname}`} />
			<section className={ classNames(css(style.userInfo_section)) } >
							<img className={classNames(css(style.userPhoto))} 
								src={user.avatar ? user.avatar : icon}
							/>
							<h2 className={classNames(css(style.userName))} >{`${user.name} ${user.surname}`}</h2>
							<p className={classNames(css(style.aboutUser))} > 
								{user.information}
							</p>
						</section>
			
						<section className={classNames(css(style.user_contacts))}>
							<a className={classNames(css(style.user_number))} href="tel:{user.phone}" >{user.phone}</a>
							<a className={classNames(css(style.user_mail))} href="mailto:{user.email}">{user.email}</a>
							<p className={classNames(css(style.user_bday))} >{user.birthday}</p>
							<a className={classNames(css(style.user_insta))} href={user.instagram}>{user.instagram}</a>
							<a className={classNames(css(style.user_facebook))} href={user.facebook} >{user.facebook}</a>	
						</section>
			
			
						<section className={classNames(css(style.user_photos))} >
							{

								user.img 
									?	user.img.map((photo, index) => {
											return (
												<img key={index} className={classNames(css(style.user_images))} src={photo} alt={`${user.name} ${user.surname}`}   />
													
											)
										})
			
									: null
							}
							
						</section>
		

	

		</div>
	)
}

export default UserInformation