import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import icon from '../../icons/search.svg';

const style = StyleSheet.create({
	search_contact: {
		width: '90%',
		margin: '24px 5% 0',
		position: 'relative'
	},
	search_input: {
		width: '100%',
		height: '21px',
		backgroundColor: 'transparent',
		border: 'transparent',
		borderBottom: '1px solid #EFEBE4',
		opacity: '0.5',
		color: '#EFEBE4'
	},
	search_btn_input: {
		background: `url(${icon})`,
		height: '14px',
		width: '14px',
		border: 'transparent',
		position: 'absolute',
		right: '0',
		top: '2px'
	}
})

const SidebarSearch = () => {
	return (
		<section className={classNames(css(style.search_contact))}>
			<input placeholder="Search a contact" type="text" className={classNames(css(style.search_input))}/>
			<input type="button" className={classNames(css(style.search_btn_input))}/>
		</section>
	)
}

export default SidebarSearch