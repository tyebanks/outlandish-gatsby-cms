import React from 'react';

const AboutText = (props) => {
    return (

        <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">{props.heading}</h2> 
            <p className="text-white">{props.text1}</p>
             <p className="text-white">{props.text2}
             <a className="text-yellow" href={props.link} > {props.handle}</a>             
            </p>
            
          </div>
        </div>        
      </div>
           
            
           
    );
  }
export default AboutText;
