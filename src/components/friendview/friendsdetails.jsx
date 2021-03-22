import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import { Button,Card } from 'react-bootstrap';
import './friendsdetails.styles.scss';

const FriendView = ({id, title, imageUrl, size, history, linkUrl, match }) => (
  <div className="container">
    
  <CardDeck>
  
  
  <Card>
    <Card.Body>
    <Link to= {"/details"+id}>
    <h4 class="card-title" styles="font-size:30px">{title}</h4>
    </Link>
      <div
    className={`${size} friends`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    
  <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    </div>
    
     
    
    </Card.Body>
  </Card >
  {'\n'}
  
</CardDeck>

</div>
);

export default withRouter(FriendView);
