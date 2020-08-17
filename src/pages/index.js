import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import Header from '../components/Header';
import AboutText from '../components/AboutText';
import Card from '../components/Card';
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
             <img src={logo} className="img-fluid" alt="outlandish cayman logo" />
                  
             <p className="mt-5 mb-5">Convenient, Crafty and Courteous service</p>
             <Scroll type="id" element="about">
                 
                 <a href="#about"><i className="fas fa-angle-double-down text floating text-white fa-1x"></i></a>
                 
            </Scroll>          
          </div>
      </div>
    </header>   
   
    <section id="about" className="about-section text-center">
      <AboutText heading="We love to Create" text1="We are the home of Cayman's best Handmade Jewelry, Chainmaille, Charms,
             Sculptures, Arts, Crafts, DIYs and more! We are always trying something new and fun and are happy
             to hear what you want to see us do!" text2="Want to place an order? Send us a message via Facebook: " link="https://www.facebook.com/outlandish.cayman/" handle="@outlandish.cayman" />
    </section>
   
    <section id="products" className="products-section">   
      <div className="container">  
          <div className="row">
            <Card image={product1} alt="earrings" title="Earrings" text="Price: CI$25"/>
            <Card image={product2} alt="braclet" title="Bracelets" text="Price: CI$15"/>
            <Card image={product3} alt="swarovski" title="Swarovski Crystals" text="Price: CI$45"/>
            <Card image={product4} alt="pendants" title="Pendants" text="Price: CI$10"/>
            <Card image={product5} alt="wired braclet" title="Wire Bracelet" text="Price: CI$15"/>
            <Card image={product6} alt="chainmaille" title="Chainmaille Braclet" text="Price: CI$15"/>
            <Card image={product7} alt="angry toast plush" title="Angry Toast Plush" text="Price: CI$20"/>
            <Card image={product8} alt="parrot plush" title="Cayman Parrot" text="Price: CI$20"/>
            <Card image={product9} alt="kawaii plush" title="Kawaii Octopus Plush" text="Price: CI$20"/>
        </div>
       </div> 
    </section> 
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
