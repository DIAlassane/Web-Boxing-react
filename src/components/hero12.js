import "./Hero12.css";
import React, { useState } from 'react';

function Hero12(props) {

    const [values, setValues] = useState({
        Email: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const garderDonnerEmail = (event) => {
        setValues({...values, email: event.target.value})
    }

    const garderSubmit = (event) => {
        event.preventDefault();
        if(values.email ){
            setValid(true);
        }
        setSubmitted(true);
    }

    return (<>

    <div className={props.cName4}>
    
    <div className="hero12-text">
        <h1>{props.title12}</h1>
        <p>{props.text12}</p>

        <form className={props.cName221}
        onSubmit={garderSubmit}>
            {submitted && valid ? <div className="message-success">Success ! Thank you for your message</div> : null}
            <input 
            onChange={garderDonnerEmail}
            value={values.email}
            type="email" 
            className="chant" 
            placeholder="Email" />
            {submitted && !values.Email ? <span>L'e-mail est invalide </span> : null}
            <button type="submit" 
            className="chant--" >Submit</button>
        </form>
    </div>
    </div>

    </>)
}

export default Hero12;