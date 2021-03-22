import React from 'react';
import INDIVIDUAL_DATA from './individual.data';
import FriendView from '../../components/friendview/friendsdetails';

class Details extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
   
           collections:INDIVIDUAL_DATA[this.props.match.params.id].items
        }
    }
    render() {
        const {collections} = this.state;
        return (<div className="details">
            {
                collections.map(({id,title,imageUrl})=>(
                    <FriendView key={id} title={title} imageUrl={imageUrl}></FriendView>
                ))
            }
        </div>)
    }
   };
   export default Details;