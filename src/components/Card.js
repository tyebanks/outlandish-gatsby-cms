import React from 'react';

const Card = (props) => {
    return (
           <div className="col">
              <div className="card h-100 shadow bg-white rounded">
                <img className="card-img" src={props.image} alt={props.alt}/>
                <div className="card-body">
                    <div className="card-title">{props.title}</div>
                    <div className="card-text">{props.text}</div>
                </div>
              </div>
          </div>  
    );
  }
export default Card;
