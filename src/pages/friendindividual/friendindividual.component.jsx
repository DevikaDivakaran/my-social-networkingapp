import React from 'react';
import INDIVIDUAL_DATA from './individual.data';
import View from '../../components/friendview/View';

class DetailsIndividual extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
   
           collections:INDIVIDUAL_DATA[this.props.match.params.id].details_sections
        }
    }
    render() {
        const {collections} = this.state;
        return (<div className="details">
            {
                collections.map(({id,name,gender,state,country,email,phone,age,city,location,Dateofbirth,imageUrl})=>(
                    <View 
                    key={id}
                    name={name} 
                    gender={gender}
                    state={state}
                    country={country}
                    email={email}
                    phone={phone}
                    age={age}
                    city={city}
                    location={location}
                    Dateofbirth={Dateofbirth}
                    imageUrl={imageUrl}
                    ></View>
                ))
            }
        </div>)
    }
   };
   export default DetailsIndividual;