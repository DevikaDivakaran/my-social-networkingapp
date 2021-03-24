import React from 'react';
import INDIVIDUAL_DATA from './individual.data';
import View from '../../components/friendview/View';
import {Link} from 'react-router-dom';
class DetailsIndividual extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
   
           collections:INDIVIDUAL_DATA[this.props.match.params.id].details_section
        }
    }
    render() {
        const {collections} = this.state;
        return (<div className="details">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/Homepage">My Space</a>
  

     
        <a className="nav-link" href="/Homepage">Home</a>
      <Link to="/">
        <button type="button" className="btn btn-outline-danger">Log Out</button>
      </Link>
     
    
    
  
</nav>

            {
                
                collections.map(({id,name,gender,city,state,country,age,email,phone,father,mother,occupation,imageUrl})=>(
                    <View 
                    key={id} 
                    name={name} 
                    gender= {gender}
                    city={city}
                    country={country}
                    state={state} 
                    email={email}
                    phone={phone}
                    age={age}
                    occupation={occupation}
                    father={father}
                    mother={mother}
                    imageUrl={imageUrl}
                    ></View>
                ))
            }
        </div>)
    }
   }
   export default DetailsIndividual;