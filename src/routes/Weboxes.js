// COMPONENTS
import Product from './product';
import Service from './service';
import Footer from '../components/footer';
import '../componentsp/producte.css';
import Navbar from '../components/Navbar';
import Hero from "../components/hero";
import Compo from "../componentsp/compo";
// IMAGES
import productImg from "../assets/7.png";
import cartasImg from "../asset-product/product1.png";
import cartas2Img from "../asset-product/product2.png";
import cartas3Img from "../asset-product/product3.png";
import cartas4Img from "../asset-product/product4.png";
import cartas5Img from "../asset-product/product5.png";
import cartas6Img from "../asset-product/product6.png";
import cartas7Img from "../asset-product/product7.png";
import cartas8Img from "../asset-product/product8.png";
import cartas9Img from "../asset-product/product9.png";
import cartas10Img from "../asset-product/product10.png";
// ROUTER - DOM
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function Weboxes() {


  return (
    <>
    
    <div className="producte">
        <Navbar />
        <Hero 
        cName="hero"
        heroimg={productImg}
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass="show"/>
        <div className="lechant unun">
            <h1>Nos Produits</h1>
            <button><i class="fa-solid fa-sort-down"></i>Filter</button>
            <h2>PROTECTION</h2>

            <div className="flex">
            <Compo 
            carteImg={cartasImg}
            name="Casque - Venom"
            price="100$"
            cName="carte"/>
            <Compo 
            carteImg={cartas2Img}
            name="Proteges- Dents"
            price="20$"
            cName="carte"/>
            <Compo 
            carteImg={cartas3Img}
            name="Coquille "
            price="25$"
            cName="carte"/>
            </div>

            <h2>SANTER</h2>
            
            <div className="flex">
            <Compo 
            info="Réduction 30%"
            carteImg={cartas4Img}
            name="Baume"
            price="15$"
            cName="carte2"/>
            <Compo 
            name="Bientôt disponible"
            price=""
            cName="carte3"/>

            <Compo 
            carteImg={cartas5Img}
            name="Bande Protection"
            price="1.99$"
            cName="carte"/>
            </div>

            <h2>EQUIPEMENTS</h2>
            
            <div className="flex">
            <Compo 
            carteImg={cartas6Img}
            name="Sac de frappe"
            price="150$"
            cName="carte"/>
            <Compo 
            carteImg={cartas7Img}
            name="Chaussure Venom"
            price="42$"
            cName="carte"/>
            <Compo 
            carteImg={cartas8Img}
            name="Sudation x UFC"
            price="27.99$"
            cName="carte"/>
            </div>

            <div className="flex">
            <Compo 
            carteImg={cartas9Img}
            name="Gang Venom"
            price="50$"
            cName="carte"/>
            <Compo 
            name="Bientôt disponible"
            price=""
            cName="carte3"/>
            <Compo 
            carteImg={cartas10Img}
            name="Patte d'ours"
            price="215$"
            cName="carte"/>
            </div>
            <Footer
            cName="footer"
            text="© 2023 Weboxing. Tous Droits Réservés."/>

        </div>

        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/Service" element={<Service/>}/>
        </Routes>


    </div>
    </>
  );
};

export default Weboxes;