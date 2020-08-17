import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import logo from '../assets/images/logo2.png';
import product1 from '../assets/images/image-1.jpg';
import product2 from '../assets/images/image-2.jpg';
import product3 from '../assets/images/image-3.jpg';
import product4 from '../assets/images/image-4.jpg';
import product5 from '../assets/images/image-5.jpg';
import product6 from '../assets/images/image-6.jpg';
import product7 from '../assets/images/image-7.jpg';
import product8 from '../assets/images/image-8.jpg';
import product9 from '../assets/images/image-9.jpg';


const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center mb-0">
          <div className="mx-auto text-center">
             <img src={logo} className="img-fluid" alt="" />
                    {/* <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1> */}       
             <p className="mt-5 mb-5">Convenient, Crafty and Courteous service</p>
             <Scroll type="id" element="about">
                 
                 <a href="#about"><i className="fas fa-angle-double-down text floating text-white"></i></a>
                 
            </Scroll>          
          </div>
      </div>
    </header>   
   
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">We love to Create</h2>
            <p className="text-white">We are the home of Cayman's best Handmade Jewelry, Chainmaille, Charms,
             Sculptures, Arts, Crafts, DIYs and more! We are always trying something new and fun and are happy
             to hear what you want to see us do!</p>
             <p className="text-white">Want to place an order? Send us a message via Facebook:
             <a className="text-yellow" href="https://www.facebook.com/outlandish.cayman/" > @outlandish.cayman</a>             
            </p>
            
          </div>
        </div>        
      </div>
    </section>
   
    <section id="products" className="products-section">
     
      <div className="container">  

        <div className="row">
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product1} alt=""/>
              <div className="card-body">
                <div className="card-title">Earrings</div>
                <div className="card-text">Price: CI$25</div>
              </div>
            </div>
          </div>
        

      
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product2} alt="" />
              <div className="card-body">
                <div className="card-title">Bracelets</div>
                <div className="card-text">Price: CI$15</div>
              </div>
            </div>
          </div>
        

        
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product3} alt="" />
              <div className="card-body">
                <div className="card-title">Swarovski Crystals</div>
                <div className="card-text">Price: CI$45</div>
              </div>
            </div>
          </div>
      

        
        
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product4} alt=""/>
              <div className="card-body">
                <div className="card-title">Pendants</div>
                <div className="card-text">Price: CI$10</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product5} alt="" />
              <div className="card-body">
                <div className="card-title">Wire Bracelets</div>
                <div className="card-text">Price: CI$15</div>
              </div>
            </div>
          </div> 

          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product6} alt=""/>
              <div className="card-body">
                <div className="card-title">Chainmaille Bracelet</div>
                <div className="card-text">Price: CI$12</div>
              </div>
            </div>
          </div>

        

        
          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product7} alt=""/>
              <div className="card-body">
                <div className="card-title">Angry Toast Plush</div>
                <div className="card-text">Price: CI$20</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product8} alt="" />
              <div className="card-body">
                <div className="card-title">Cayman Parrot Plush</div>
                <div className="card-text">Price: CI$20</div>
              </div>
            </div>
          </div> 

          <div className="col">
            <div className="card h-100 shadow bg-white rounded">
              <img className="card-img" src={product9} alt=""/>
              <div className="card-body">
                <div className="card-title">Kawaii Octopus Plush</div>
                <div className="card-text">Price: CI$20</div>
              </div>
            </div>
          </div>
        </div>
      </div>  
       
    </section> 
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
