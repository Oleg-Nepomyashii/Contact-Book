import { createStore , combineReducers} from 'redux';

import menuReducer from '../reducers/menu-reducer';
import contactsReducer from '../reducers/contacts-reducer';


const allReducers = combineReducers({
	menuPage: menuReducer,
	contactsPage: contactsReducer
})

const store = createStore(allReducers );

window.store = store;

export default store;
