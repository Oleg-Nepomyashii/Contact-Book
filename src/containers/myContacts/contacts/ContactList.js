import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';
import { Link} from 'react-router-dom';

import Image from '../../../components/Image';
import Title from '../../../components/Title';
import ContactsHeader from './ContactsHeader';


import icon from '../../../icons/1.png'

const style = StyleSheet.create({
	contacts_main: {
		margin: '16px 16px 0',
		'@media screen and (min-width: 448px)': {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-between'
		}
	},
	contact_card: {
		height: '48px',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '24px',
		position: 'relative',
		'@media screen and (min-width: 448px)': {
			width: '200px',
			'&:nth-child(odd)': {
				marginRight: '16px'
			}
		},
		'@media screen and (min-width: 500px)': {
			width: '226px'
		},
		'@media screen and (min-width: 548px)': {
			width: '250px'
		},
		'@media screen and (min-width: 624px)': {
			width: '288px'
		}
		,
		'@media screen and (min-width: 648px)': {
			width: '300px'
		}
		,
		'@media screen and (min-width: 700px)': {
			width: '200px',
			'&:nth-child(odd)': {
				marginRight: '0'
			}
		}
		,
		'@media screen and (min-width: 780px)': {
			width: '240px'
		}
		,
		'@media screen and (min-width: 920px)': {
			width: '288px'
		}

	},
	contact_photo: {
		width: '48px',
		height: '48px',
		borderRadius: '50%',
		border: '2px solid #FFB143',
	},
	contact_info: {
		width: '69%',
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '16px',
		marginRight: '10%',
		overflow: 'hidden',
		'@media screen and (min-width: 448px)': {
			width: '60%',
			marginRight: '17%'
		},
		'@media screen and (min-width: 920px)': {
			width: '69%',
			marginRight: '10%'
		}
	},
	contact_title: {
		paddingTop: '9px',
		color: '#000',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		margin: '0',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: 'normal',
		lineHeight: '16px'
	},
	contact_text: {
		fontSize: '12px',
		lineHeight: '15px',
		color: '#344652',
		mixBlendMode: 'normal',
		opacity: '0.75',
		margin: '0'
	},
	card_btn: {
		height: '20px',
		width: '32px',
		marginTop: '20px',
		position: 'absolute',
		right: '0',
		background: 'transparent',
		border: 'transparent'	
	},
	link: {
		textDecoration: 'none'
	}

})

const ContactList = (props) => {
	return(
		<>
			<ContactsHeader  title={props.title} />
			<section className={classNames(css(style.contacts_main))}>
				{
					props.contacts.map(item => (
						<div key={item.id} className={classNames(css(style.contact_card))}>
							<Image className={classNames(css(style.contact_photo))} src={item.avatar ? item.avatar : icon} alt={`${item.name} ${item.surname}`}/>
							<div className={classNames(css(style.contact_info))} >
								<Link id={item.id} onClick={props.getContactId} to={`/information/${item.name} ${item.id}`} className={classNames(css(style.link))}>
									<Title tag='h2' text={`${item.name} ${item.surname}`} className={classNames(css(style.contact_title))}/>
								</Link>	
								<p className={classNames(css(style.contact_text))} >some ololo</p>
							</div>
							<button className={classNames(css(style.card_btn))} >&#8226;&#160;&#8226;&#160;&#8226;</button>
						</div>
					))
				}

			</section>
		</>
	)
}

export default ContactList