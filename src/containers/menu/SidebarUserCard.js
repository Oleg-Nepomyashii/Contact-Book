import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import Image from '../../components/Image';

const style = StyleSheet.create({
	sidebar_user_card: {
		margin: '24px 5% 0',
		display: 'flex',
		position: 'relative'
	},
	user_avatar: {
		width: '48px',
		height: '48px',
		borderRadius: '50%',
		border: '2px solid #FFB143'
	},
	users_links: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '5%'
	},
	user_name: {
		paddingTop: '6px',
		lineHeight: '16px',
		color: '#EFEBE4',
		textDecoration: 'none'
	},
	user_log_out: {
		fontSize: '12px',
		lineHeight: '15px',
		color: '#FFB143',
		textDecoration: 'none',
		paddingTop: '4px'
	},

	user_option: {
		height: '20px',
		width: '32px',
		marginTop: '20px',
		position: 'absolute',
		right: '16px',
		color: '#FFB143',
		background: 'transparent',
		border: 'transparent'
	}

})

const SidebarUserCard = () => {
	return(
		<section className={classNames(css(style.sidebar_user_card))}>
			<Image className={classNames(css(style.user_avatar))} src="http://placehold.it/48x48" alt="Some discription"/>
			<div className={classNames(css(style.users_links))}>
				<a className={classNames(css(style.user_name))} href="/userinfo">Oleg</a>
				<a className={classNames(css(style.user_log_out))} href="#">Log out</a>
			</div>
			<button className={classNames(css(style.user_option))}>&#8226;&#160;&#8226;&#160;&#8226;</button>
		</section>
	)
}

export default SidebarUserCard