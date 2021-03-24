import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './friendsdetails.styles.scss';

const FriendView = ({ title, imageUrl,id}) => (
 
  <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            <Link  to=  {"details/"+id} className="btn btn-success text-center">Know More </Link>
            
        </Card.Body>


    </Card>
    
  
);


export default FriendView;
