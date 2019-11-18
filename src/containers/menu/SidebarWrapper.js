import React from 'react';
import { StyleSheet , css } from 'aphrodite-jss';
import classNames from 'classnames';


import SidebarHeader from './SidebarHeader';
import SidebarUserCard from './SidebarUserCard';
import SidebarSearch from './SidebarSearch';
import CategoriesContainer from './CategoriesContainer';
import SidebarUpcomingBday from './SidebarUpcomingBday';
import SidebarAddContact from './SidebarAddContact';

const style = StyleSheet.create({
	sidebar_wrapper : {
		minWidth: '320px',
		minHeight: '100vh',
		margin: '0 auto',
		background: 'linear-gradient(0deg, #344652 0%, #101F2A 100%)',
	},
	ololo: {
		height: '100px',
	}
})


const SidebarWrapper = (props) => {
	return (
		<div className = { classNames( css(style.sidebar_wrapper) ) }>
				<SidebarHeader />
				<SidebarUserCard />
				<SidebarSearch />
				<CategoriesContainer />
				<SidebarUpcomingBday />
				<SidebarAddContact />
		</div>
	)
}

export default SidebarWrapper  