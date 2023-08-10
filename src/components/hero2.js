import "./Hero2.css";

function Hero2(props) {
    return (<>

    <div className={props.cName2}>
        <img src={props.heroimg2} alt="WEBOWING Image" />
    
    <div className="hero2-text">
        <h1>{props.title2}</h1>
        <p>{props.text2}</p>
    </div>
    </div>

    </>)
}

export default Hero2;