import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css-log-reg/log.css';
import img from '../assets/venum.svg';
import img2 from '../assets/ufc.webp';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/signin', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/homes')
            }
        })
        .catch(err => console.log(err))
    }


  return (
    <>
    <Navbar/>
    <div className="flex">
    <div className="img"></div>

    <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input className='inputo' type="email" placeholder='Email' 
        name='email' autoComplete='off'
        onChange={(e) => setEmail(e.target.value)}/>
        <input className='inputo' type="password" placeholder='password' 
        name='password'
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Sign In</button>
        
        <p className='para'>You may have no account ? <a href="/register">Register now !</a></p>

        <h2 className='titi'>Nos partenaires</h2>
        <div className="flexa">
            <div className="uno">
                <img src={img} alt="" />
            </div>
            <div className="deuxo">
            <img src={img2} alt="" />
            </div>
        </div>
    </form>
    </div>

    <Footer
        cName="footer"
        text="© 2023 Weboxing. Tous Droits Réservés."/>
    </>
  )
}

export default Signin;