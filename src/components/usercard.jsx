// write the component code here

import React from 'react';
import '../index.css'; 

const UserCard = () => {

  return (
    <div className="user-card">
      <img src='https://i.pinimg.com/736x/44/5b/bd/445bbda641f2b22e71970d15be568f24.jpg' alt="Profile" className="photo" />
      <div className="details">
        <h1>#Kalvian UserCard</h1>
        <h2 className="name">sravani</h2>
        <p className="email">Email: sravani.penumaji.s86@kalvium.community</p>
        <p className="phone">Phone: 1234567890</p>
        <p className="address">Address:The Apollo University, Chittoor, Andhra Pradesh, India </p>
      </div>
    </div>
  );
};

export default UserCard;