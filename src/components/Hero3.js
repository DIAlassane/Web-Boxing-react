import "./Hero3.css";

function Hero3(props) {
    return (<>

    <div className={props.cName3}>
    
    <div className="hero3-text">
        <h1>{props.title3}</h1>
        <p>{props.text3}</p>
    </div>
    <img src={props.heroimg3} alt="WEBOWING Image" />

    </div>

    </>)
}

export default Hero3;