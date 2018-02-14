import React from 'react';
import '../../css/bootstrap.min.css';
import './Stylist.css'

const stylist = (props) => {
  return (
    <div className="card" style={{width: 220 + 'px'}}>
      <img className="card-img-top" src={props.image}/>
      <div className="card-body">
        <p className="card-text">
          <h6>{props.name}</h6>
          <small>{props.price} &emsp; {props.likes} &emsp;{props.comments} &emsp;</small>
        </p>
      </div>
    </div>
  );
};



export default stylist;