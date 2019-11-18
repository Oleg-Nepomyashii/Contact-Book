import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import Title from '../../components/Title';

const style = StyleSheet.create({
	userCard_header: {
		height: '60px',
		backgroundColor: '#FFB143',
		display: 'flex',
		boxShadow: '0px 2px 4px rgba(20, 34, 44, 0.498019)',
		position: 'relative',
	},
	userCard_menu: {
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
	}
	},
	userCard_title: {
		margin: '18px auto 0', 
		fontSize: '24px',
		lineHeight: '28px',
		color: '#101F2A',
		fontWeight: 'normal'
	},
	contact_action_menu: {
		height: '20px',
		width: '32px',
		marginTop: '20px',
		position: 'absolute',
		right: '16px',
		background: 'transparent',
		border: 'transparent'
	}
}) 

const UserInformationHeader = (props) => {
	return (
		<section className={classNames(css(style.userCard_header))}>
			<button className={classNames(css(style.userCard_menu))}></button>
			<Title tag='h1' className={classNames(css(style.userCard_title))} text={props.title} />
			<button className={classNames(css(style.contact_action_menu))}>&#8226;&#160;&#8226;&#160;&#8226;</button>
		</section>			
	)
}

export default UserInformationHeader 