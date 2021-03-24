import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import firebase from '../../firebase/firebase.utils.js';
import "firebase/auth";
class HomePage extends Component  {
  constructor(){
    super();
    this.state = {
        isLogIn: false,
        name: "",
        photo: ""
    }
}
/*
onLogout = () => {
  firebase.auth().signOut().then(() => {
      console.log("successfully logged out");
    }).catch((error) => {
      console.log(error);
    });
    this.setState({
        isLogIn: false
    })
    
   
}
*/
render() {
  return (
  
       <div className="container">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="homepage">My Space</a>
  

     
        <a className="nav-link" href="homepage">Home</a>
      <Link to="/">
        <button type="button" className="btn btn-outline-danger">Log Out</button>
      </Link>
     
    
    
  
</nav>

  
   <Directory/>
  
  </div>
  
  )
}
}
  export default HomePage;
