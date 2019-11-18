import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';

import { NavLink} from 'react-router-dom';

import Title from '../../components/Title';

const style = StyleSheet.create({
	categories: {
		marginTop: '32px',
		maxHeight: '29%',
		overflow: 'auto',
		padding: '0',
		'@media screen and (min-width: 768px)': {
			maxHeight: '50%'
		}
	},
	categories_title: {
		fontSize: '16px',
		lineHeight: '16px',
		letterSpacing: '1.86667px',
		paddingLeft: '5%',
		color: '#D9D2C6',
		margin: '0',
		fontWeight: 'normal'
	},
	categories_list: {
		listStyle: 'none',
		margin: '24px 0 0',
		padding: '0'
	}, 
	categories_item: { 
		height: '40px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		borderLeft: '2px solid transparent',
		textDecoration: 'none',
		'&:hover': {
			borderColor: '#FFB143',
			background: 'linear-gradient(90deg, #7a797947 0%, rgba(255, 255, 255, 0.0001) 91.48% )'
		}
	},
	categories_link: {
		lineHeight: '40px',
		textDecoration: 'none',
		paddingLeft: '5%',
		color: '#D9D2C6'
	}
});

const SidebarCategories = (props) => {
	return(
		<section className={classNames(css(style.categories))}>
			<Title tag='h2' className={classNames(css(style.categories_title))} text='CATEGORIES'/>
			<ul className={classNames(css(style.categories_list))}>
				<li className={classNames(css(style.categories_item))}>
					<NavLink onClick={props.setNewCategory} to={`/contacts/all`} className={classNames(css(style.categories_link))}>
						All Contacts
					</NavLink>
				</li>
				{
					props.categories.map(note => (

			            <li 
							key={note._id}
							className={classNames(css(style.categories_item))}
						>
							<NavLink onClick={props.setNewCategory} to={`/contacts/${note._id}`} className={classNames(css(style.categories_link))}>
								{note.name}
							</NavLink>

						</li>
			         ))
				}
			</ul>
		</section>
	)
}

export default SidebarCategories