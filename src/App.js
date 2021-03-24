import React from 'react';
import  HomePage from './pages/homepage/homepage.component';
import  SignUpPage from './pages/signuppage/signuppage';
import  SignInPage from './pages/signinpage/signinpage';
import  DetailsIndividual from './pages/friendindividual/friendindividual.component';

import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom'; 
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
function App() {
  return (<Router>
   
          <Switch>
            <Route exact path='/' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route exact path='/details/:id' component={DetailsIndividual} />
            <Route path='/Homepage' component={HomePage} />
          </Switch>
     </Router>
  );
}

export default App;

