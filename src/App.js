import React from 'react';

import {BrowserRouter as Router , Route} from 'react-router-dom';

import Login from './containers/auth/Login';
import SidebarWrapper from './containers/menu/SidebarWrapper';

import AddContactContainer from './containers/addContact/AddContactContainer';
import ContactsWrapper from './containers/myContacts/ContactsWrapper';
import UserContainer from './containers/contactInfo/UserContainer';

const App = (props) => {
  return (
    <Router>
      	<>	
          {
            props.menu.menuPage.isLogged
              ? <Route  exact path='/' 
                          render={() => <SidebarWrapper categories={props.menu.menuPage}/>} />
              : <Route   
                  render={ () => <Login login={props.login} registration={props.registration} /> }
               />
          }

          <Route path='/add' exact component={AddContactContainer} />
          <Route path='/contacts'  component={ContactsWrapper} />
          <Route path='/information'  component={UserContainer} />

      	</>
    </Router>
  ); 
}

export default App;
   