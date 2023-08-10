import React from 'react';
import '../companier/panier.css';
import Navbar from '../components/Navbar';
import Hero from '../components/hero';

// Images
import productImg from "../assets/7.png";
import Footer from '../components/footer';
import Buttonsc from '../componentslp/Buttonsc';

function Panier() {
  return (
    <div>
        <Navbar />
        <Hero 
        cName="hero"
        heroimg={productImg}
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass="show"/>

        <div className="section1">
            <Buttonsc
            url="./Sign"/>
            <h2>Oups ! Vôtre panier est vide </h2>
            <a href="/product">Continuez vos achats</a>
        </div>
        <Footer
        cName="footer"
        text="© 2023 Weboxing. Tous Droits Réservés."/>        
    </div>
  )
}

export default Panier;