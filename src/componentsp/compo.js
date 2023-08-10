import "../componentsp/producte.css";

function compo(props){
    return(
        <div className={props.cName}>
            <h3>{props.info}</h3>
            <img src={props.carteImg} alt="WEBOXINGIMAGE" />
            <div className="f-card">
                <h2>{props.name}</h2>
                <p>Prix : {props.price}</p>
                <button className="buttone">view</button>
            </div>
        </div>
    )
}

export default compo;