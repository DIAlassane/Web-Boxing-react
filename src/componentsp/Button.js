import "../componentsp/Banner.css";

function Button(props) {
    return(
        <button className={props.cName2}>
            <a href={props.href}> {props.text} <span className={props.cName}>{props.text2}</span></a>
        </button>
    )
}

export default Button;