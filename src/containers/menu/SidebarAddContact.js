import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';
import icon from '../../icons/plus.svg';

const style = StyleSheet.create({
	add_contact_section: {
		width: '88.75%',
		height: '50px',
		borderTop: '1px solid #EFEBE4',
		margin: '25px 6.25% 0 5%',
		position: 'relative',
	},
	btn_add_contact: {
		lineHeight: '40px',
		paddingLeft: '28px',
		backgroundColor: 'transparent',
		border: 'transparent',
		fontSize: '16px',
		textDecoration: 'none',
		letterSpacing: '0.320052px',
		color: '#EFEBE4',
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '20px',
			height: '20px',
			background: `url(${icon}) no-repeat center`,
			borderRadius: '50%',
			left: '0',
			top: '8px'
		}
	}
})

const SidebarAddContact = () => {
	return(
		<section className={classNames(css(style.add_contact_section))}>
			<NavLink to='/add' className={classNames(css(style.btn_add_contact))}>
				Add contact
			</NavLink>
		</section>
	)
}

export default SidebarAddContact