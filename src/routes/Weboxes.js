// COMPONENTS
import Product from './product';
import Service from './service';
import Footer from '../components/footer';
import '../componentsp/producte.css';
import Hero from "../components/hero";
// IMAGES
import productImg from "../assets/7.png";
// ROUTER - DOM
import { Route, Routes } from 'react-router-dom';
import Prodi from '../componentsp/prodi';
import { useState } from 'react';
import Navbaroi from '../componentsp/Navbaroi';
import Cart from '../componentsp/cart';

function Weboxes() {
  const [show, setShow] = useState (true);
  const [cart, setCart] = useState([]);

const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
    
    <div className="producte">
        <Navbaroi setShow={setShow} size={cart.length} />
        <Hero 
        cName="hero"
        heroimg={productImg}
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass="show"/>
        <div className="navigat">
          <a href="/">Home</a>
          <a href="/service">Services</a>
          <a href="/signin">Sign in / Register</a>
        
        </div>
        <div className="lechant unun">
            <h1>Nos Produits</h1>
            {
              show?<Prodi handleClick={handleClick} /> : (
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
              )
            }
        </div>
        <Footer
        cName="footer"
        text="© 2023 Weboxing. Tous Droits Réservés."/>

        <Footer />
        <Routes>
            <Route path="/product" element={<Product/>}/>
            <Route path="/Service" element={<Service/>}/>
        </Routes>


    </div>
    </>
  );
};

export default Weboxes;