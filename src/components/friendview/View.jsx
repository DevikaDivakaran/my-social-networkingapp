import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const View = ({id,name,gender,city,state,country,age,email,phone,father,mother,occupation,imageUrl}) => {
  return (
    <div className="user-view">
      <br/>
      <h1 className="text-white" >{name}</h1>
      <br/>
      <div className='image'
      style={{
        backgroundImage: `url(${imageUrl})`, width:'600px',  height:'400px'
      }}
      />
      <div className='collection-footer'>     
      <h3 className="text-white" >Id: {id}</h3>
      <h3 className="text-white" >Gender: {gender}</h3>
      <h3 className="text-white" >Age: {age}</h3>
      <h3 className="text-white" >City: {city}</h3>
      <h3 className="text-white" >State: {state}</h3>
      <h3 className="text-white" >Country: {country}</h3>
      <h3 className="text-white" >Occupation: {occupation}</h3>
      <h3 className="text-white" >Fathers Name: {father}</h3>
      <h3 className="text-white" > Mothers Name: {mother}</h3>
      <h3 className="text-white">Email: {email}</h3>
      <h3 className="text-white">Phone: {phone}</h3>
      </div>
    </div>
  );
};

export default View;