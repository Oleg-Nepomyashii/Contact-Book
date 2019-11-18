import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import Title from '../../../components/Title';


const style = StyleSheet.create({
	new_contact_header: {
		height: '60px',
		backgroundColor: '#FFB143',
		display: 'flex',
		boxShadow: '0px 2px 4px rgba(20, 34, 44, 0.498019)',
		position: 'relative'

	},
	new_contact_menu: {
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
			top: '6px',
		},
		'@media screen and (min-width: 640px)': {
  			display: 'none'
		}
	},
	new_contact_title: {
		fontWeight: 'normal',
		// marginTop: '18px',
		margin: '18px 4% 0',
		fontSize: '24px',
		lineHeight: '24px',
		color: '#101F2A'
	},
	add_close_btn: {
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

const AddContactHeader = () => {
	return (
		<section className={classNames(css(style.new_contact_header))}>
			<button className={classNames(css(style.new_contact_menu))} ></button>
			<Title  className={classNames(css(style.new_contact_title))} tag='h1' text='Add new Contact'/>
			<NavLink to='/' className={classNames(css(style.add_close_btn))}></NavLink>
		</section>
	)
}

export default AddContactHeader