import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';

import {getCategories} from '../../reducers/menu-reducer';
import {setCategory} from '../../reducers/contacts-reducer';

import SidebarCategories from './SidebarCategories';

class CategoriesContainer extends React.Component {
	componentDidMount() {
		axios.get(`http://phonebook.hillel.it/api/categories?`)
			.then(response => {
				this.props.getCategories(response.data)
		})	
	}

	render() {
		return (
			<SidebarCategories 
				categories={this.props.categories} 
				setNewCategory = {this.props.setCategory}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.menuPage.categories
	}
}

export default connect(mapStateToProps , {
	getCategories,
	setCategory
})(CategoriesContainer)