import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';

import Title from '../../../components/Title';

const style = StyleSheet.create({
	contacts_header: {
		height: '60px',
		backgroundColor: '#FFB143',
		display: 'flex',
		boxShadow: '0px 2px 4px rgba(20, 34, 44, 0.498019)',
		position: 'relative'
	},
	contacts_menu: {
		height: '18px',	
		width: '24px',
		marginTop: '24px',
		marginLeft: '5%',
		border: 'transparent',
		borderTop: '2px solid #101F2A',
		borderBottom: '2px solid #101F2A',
		backgroundColor: 'transparent',
		position: 'relative',
		'&:after': {
			content: "''",
			position: 'absolute',
			height: '2px',
			width: '24px',
			background: '#101F2A',
			left: '0',
			top: '6px'
		},
		'@media screen and (min-width: 640px)': {
  			display: 'none'
		}
	},
	contacts_title: {
		marginTop: '18px',
		marginLeft: '15.62%',
		fontSize: '16px',
		fontSize: '24px',
		lineHeight: '24px',
		color: '#101F2A'
	},
	close_btn: {
		height: '24px',
		width: '24px',
		marginRight: '5%',
		marginTop: '16px',
		color: '#EFEBE4',
		position: 'absolute',
		right: 0,
		backgroundColor: 'transparent',
		border: 'transparent',
		'&:after': {
			position: 'absolute',
			content: "''",
			width: '1px',
			height: '30px',
			backgroundColor: '#101F2A',
			left: '12px',
			top: '-3px',
			transform: 'rotate(-45deg)'
		},
		'&:before': {
			position: 'absolute',
			content: "''",
			width: '1px',
			height: '30px',
			backgroundColor: '#101F2A',
			left: '12px',
			top: '-3px',
			transform: 'rotate(45deg)'
		}
	}
})

const ContactsHeader = (props) => {
	return (
		<section className={classNames(css(style.contacts_header))} >
			<button className={classNames(css(style.contacts_menu))} ></button>
			<Title  className={classNames(css(style.contacts_title))} tag='h1' text={props.title}/>
			<NavLink to='/' className={classNames(css(style.close_btn))}></NavLink>
		</section>
	)
}

export default ContactsHeader