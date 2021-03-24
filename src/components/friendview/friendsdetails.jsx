import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';
import { Card } from 'react-bootstrap';
import './friendsdetails.styles.scss';

const FriendView = ({id, title, imageUrl, size, history, linkUrl, match }) => (
  <div className="container">
    
  <CardDeck>
  
  
  <Card>
    <Card.Body>
    <h3 class="card-title" style={{color: "#800080"}}>{title}</h3>
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
    <div className="d-flex justify-content-center">
    <Link to= {"details/"+id} className="btn btn-outline-dark">See more</Link>
    </div>
    
    </Card.Body>
  </Card >
  {'\n'}
  
</CardDeck>

</div>
);

export default withRouter(FriendView);
