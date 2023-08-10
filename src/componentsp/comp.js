import "../componentsp/Banner.css";

function Comp(props) {
    return (<>
    <a href={props.href} className={props.cName}>
        <h2>{props.title}</h2>
    </a>
    
    </>)
}

export default Comp;