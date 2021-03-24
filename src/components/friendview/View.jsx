import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

const View = ({id,name,gender,state,country,email,phone,age,city,location,Dateofbirth,imageUrl}) => {
  return (
    <div className="user-view">
      <h1 className="name" >{name}</h1>
      <br/>
      <div className='image'
      style={{
        backgroundImage: `url(${imageUrl})`, width:'600px',  height:'600px', backgroundRepeat:'repeat'
      }}
      />
      <div className='collection-footer'>
        <h2 className='name'>Gender: {gender}</h2>
        <h2 className='name'>State: {state}</h2>
        <h2 className='name'>Country: {country}</h2>
        <h2 className='name'>Email: {email}</h2>
        <h2 className='name'>Phone: {phone}</h2>
        <h2 className='name'>Age: {age}</h2>
        <h2 className='name'>city: {city}</h2>
        <h2 className='name'>Location: {location}</h2>
        <h2 className='name'>Date of Birth: {Dateofbirth}</h2>

      </div>
    </div>
  );
};

export default View;