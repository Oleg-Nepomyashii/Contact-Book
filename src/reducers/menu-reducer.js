import * as axios from 'axios';

const LOGIN = 'LOGIN';
const REGISTRATION = 'REGISTRATION';
const ADD_CATEGORIES = 'ADD_CATEGORIES';
const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
const IS_LOGGED = 'IS_LOGGED';

const initialState = {
	isLogged: true,
	isFetching: false,
	categories: []
}

const menuReducer = (state = initialState , action) => {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				isLogged: action.result
			}
		case REGISTRATION: 
			return {
				...state,
				isLogged:action.result
			}
		case IS_LOGGED:
			return {
				...state,
				isLogged: action.value
			}	

		case ADD_CATEGORIES:
			return {
				...state ,
				categories: [...state.categories , action.categorie]
			}	

		case GET_ALL_CATEGORIES:
			return {
				...state,
				categories: [...action.allCategorie]
			}

		default: 
			return state	
	}
}

export const login = (e) => {
	e.preventDefault();
	const data = new FormData(e.target);
	const dataObj = Array.from(data.entries()).reduce((accum , item) => {
			accum[item[0]] = item[1];
			return accum;
	}, {})
	e.target.reset();

	return {
		type: LOGIN,
		result: true		
	}

	// axios.post(`http://phonebook.hillel.it/api/phonebook/users/register`, {} , {
	// 	data: dataObj
	// })
	//  	.then(response => {
	//  		console.log(response)
	// 		return {
	// 			type: LOGIN,
	// 			result: true
			
	// 		}
	// 	})
	
}

export const registration = (e) => {
	e.preventDefault();
	const data = new FormData(e.target);
	const dataObj = Array.from(data.entries()).reduce((accum , item) => {
			accum[item[0]] = item[1];
			return accum;
	}, {})
	e.target.reset();
	
	return {
		type: REGISTRATION,
		result: true
	}
	
	
	// axios.post(`http://localhost:8081/api/users/register`, {} , {
	// 	header: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	data: dataObj
	// })
	//  	.then(response => {
	// 		// if(response.message === "Register successful") {
	// 			console.log(response)
	// 			return {
	// 				type: REGISTRATION,
	// 				result: true
	// 			}
	// 		// }
	// 	})		
}

export const isLog = (value) => {
	return {
		type: IS_LOGGED,
		isLog: value
	}
}

export const setCategory = (categorie) => {
	return {
		type: ADD_CATEGORIES,
		categorie
	}
}

export const getCategories = (allCategorie) => {
	return {
		type: GET_ALL_CATEGORIES,
		allCategorie
	}
}


export default menuReducer;