import '../componentserv/service.css';
import React, { useState } from 'react';


function Reservation(props){

    const [values, setValues] = useState({
        Nom: "",
        Prenom: "",
        Email: "",
        Typeseance: "",
        date: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const garderDonnerEmail = (event) => {
        setValues({...values, email: event.target.value})
    }
    const garderDonnerNom = (event) => {
        setValues({...values, Nom: event.target.value})
    }
    const garderDonnerPrenom = (event) => {
        setValues({...values, Prenom: event.target.value})
    }
    const garderDonnerDate = (event) => {
        setValues({...values, Date: event.target.value})
    }
    const garderDonnerType = (event) => {
        setValues({...values, Type: event.target.value})
    }


    const garderSubmit = (event) => {
        event.preventDefault();
        if(values.email && values.nom && values.prenom && values.date && values.type){
            setValid(true);
        }
        setSubmitted(true);
    }

    return(
        <div className="reservation">
            <h1>Réserver</h1>
            
        <form className="formulaire back"
            onSubmit={garderSubmit}>
            {submitted && valid ? <div className="message-success">Success ! Thank you for your message</div> : null}
            <input 
            onChange={garderDonnerEmail}
            value={values.email}
            type="email" 
            className="chant" 
            placeholder="Email" />
            {submitted && !values.Email ? <span>L'e-mail est invalide </span> : null}
            <input 
            onChange={garderDonnerNom}
            value={values.subject}
            type="text" 
            className="chant" 
            placeholder="Nom" />
            {submitted && !values.nom ? <span>Invalide </span> : null}
            <input 
            onChange={garderDonnerPrenom}
            value={values.prenom}
            type="text" 
            className="chant-" 
            placeholder="Prenom" />
            {submitted && !values.prenom ? <span>Invalide </span> : null}
            <input 
            onChange={garderDonnerDate}
            value={values.date}
            type="date" 
            className="chant-" 
            placeholder="00/00/0000" />
            {submitted && !values.date ? <span>Invalide </span> : null}
            <label htmlFor="Level">Level</label>
            <input 
            onChange={garderDonnerType}
            value={values.type}
            type="range" 
            className="chant-" 
            min={0} 
            max={10}/>
            {submitted && !values.type ? <span>Invalide </span> : null}

            <button type="submit" 
            className="chant--" >Submit</button>

        </form>

            
        </div>

    )
}

export default Reservation;