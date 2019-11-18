import shortid from 'shortid';

const ADD_CONTACT = 'ADD_CONTACT';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_CONTACT_ID = 'SET_CONTACT_ID';

const initialState = {
	contacts:[
	  {
	    avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
	    name: 'Alex',
	    surname: 'Alexandrov',
	    id: 'd4b33a1',
	    phone: '0935555555',
	    email: 'ololo@gmail.com',
	    birthday: '01/18/1990',
	    information:  `Some discribe...`,
	    facebook: 'https://www.facebook.com',
	    instagram: 'https://www.instagram.com',
	    address: {},
	    category: 'Friend'
	  },
	  {
	    avatar: '',
	    name: 'Vasya',
	    surname: 'Vasiliev',
	    id: '222',
	    phone: '0686666666',
	    email: 'kokoko@gmail.com',
	    birthday: '01/18/1988',
	    information:  `Some discribe...`,
	    facebook: 'https://www.facebook.com',
	    instagram: 'https://www.instagram.com',
	    address: {},
	    category: 'Family'
	  },
	  {
	    avatar: null,
	    name: 'Ivan',
	    surname: 'Ivanov',
	    id: '321',
	    phone: '0687777777',
	    email: 'dododod@gmail.com',
	    birthday: '03/11/1990',
	    information:  `Some discribe...`,
	    facebook: 'https://www.facebook.com',
	    instagram: 'https://www.instagram.com',
	    address: {},
	    category: 'Fiteness'
	  },
	  {
	    avatar: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
	    name: 'Dima',
	    surname: 'Dmitrov',
	    id: '123',
	    phone: '0683333333',
	    email: 'gogogo@gmail.com',
	    birthday: '05/22/1993',
	    information: `Some discribe...`,
	    facebook: 'https://www.facebook.com',
	    instagram: 'https://www.instagram.com',
	    address: {},
	    category: 'Work'
	  }
],
	currentCategory: '',
	showById: ''
}

const contactsReducer = (state = initialState , action) => {
	switch(action.type) {
		case ADD_CONTACT: {
			return {
				...state,
				contacts: [...state.contacts , {...action.dataObj}]
			}
		}
		case SET_CATEGORY: {
			return {
				...state,
				currentCategory: action.categorie
			}
		}

		case SET_CONTACT_ID: {

			const a = state.contacts.filter(item => {
					if(`${item.name} ${item.surname}` === action.show) {
						return item
					}
			})

			return {
				...state,
				showById: a
			}
		}

		default:
			return state
	}
}

export const addContact = (e) => {
	e.preventDefault();
	const data = new FormData(e.target);
	const dataObj = Array.from(data.entries()).reduce((accum , item) => {
			accum[item[0]] = item[1];
			return accum;
	}, {})
	e.target.reset();

	return {
		type: ADD_CONTACT,
		dataObj
	}
}

export const setCategory = (e) => {
	const newCategory = e.target.text;
	return {
		type: SET_CATEGORY,
		categorie: newCategory
	}
}


export const getContactId = (e) => {
	const contact = e.target.innerText
	return {
		type: SET_CONTACT_ID,
		show: contact
	}
}

export default contactsReducer