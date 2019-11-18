import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import Title from '../../components/Title';

const style = StyleSheet.create({
	sidebar_header: {
		display: 'flex',
	},
	btn_close_menu: {
		height: '24px',
		width: '24px',
		marginLeft: '5%',
		marginTop: '16px',
		color: '#EFEBE4',
		position: 'relative',
		backgroundColor: 'transparent',
		border: 'transparent',
		'@media screen and (min-width:640px)': {
			display: 'none'
		},
		'&:before': {
			position: 'absolute',
			content: "''",
			width: '1px',
			height: '30px',
			backgroundColor: '#EFEBE4',
			left: '12px',
			top: '-3px',
			transform: 'rotate(45deg)',
		},
		'&:after': {
			position: 'absolute',
			content: "''",
			width: '1px',
			height: '30px',
			backgroundColor: '#EFEBE4',
			left: '12px',
			top: '-3px',
			transform: 'rotate(-45deg)'
		}

	},
	sidebar_title: {
		fontSize: '24px',
		lineHeight: '24px',
		margin: '16px 0 0 calc(45% - 165px/2 - 24px)',
		color: '#EFEBE4',
		fontWeight: 'normal'
	},
})


const SidebarHeader = () => {
	return(
		<section className={classNames(css(style.sidebar_header))} >
			<button className={classNames(css(style.btn_close_menu))} ></button>
			<Title tag='h1' className={classNames(css(style.sidebar_title))} text="Contact Book"/>
		</section>
	)
}

export default SidebarHeader