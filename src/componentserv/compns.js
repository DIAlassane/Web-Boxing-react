import "../componentserv/service.css";

function Compns(props) {
    return (<>
    <div className={props.cName}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <h3>PROCHAINES SÉANCES</h3>
        <p>{props.date}</p>
        <p>{props.date2}</p>
    </div>
    
    </>)
}

export default Compns;