import React from 'react';
import SocialLinks from './SocialLinks';



export default function Email() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h2 className="text-black-55 mb-5">GET IN TOUCH</h2>
            <p className="text-black mb-5">If you have any queries about our business or products please contact us. We’d love to hear from you!</p>
            <SocialLinks/>
          </div>
        </div>
      </div>
    </section>
  );

  
}
