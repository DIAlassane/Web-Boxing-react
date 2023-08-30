import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import img from '../assets/venum.svg';
import img2 from '../assets/ufc.webp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
            navigate('/signin')
        })
        .catch(err => console.log(err))
    }

  return (
    <>
        <Navbar/>
    <div className="flex">
            
    <form onSubmit={handleSubmit}>
        <h1>REGISTRATION</h1>
        <input className='inputo' type="text" placeholder='Username'
        name="email" autoComplete='off'
        onChange={(e) => setName(e.target.value)}/>
        <input className='inputo' type="email" placeholder='Email' 
        name='email' autoComplete='off'
        onChange={(e) => setEmail(e.target.value)}/>
        <input className='inputo' type="password" placeholder='password' 
        name='password'
        onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">REGISTER</button>
        
        <p className='para'>You may have an account ? <a href="/signin">Sign in now !</a></p>

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
    <div className="img"></div>
    </div>

    <Footer
        cName="footer"
        text="© 2023 Weboxing. Tous Droits Réservés."/>

    </>
  )
}

export default Register;