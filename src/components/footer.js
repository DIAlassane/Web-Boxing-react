import "./Footer.css";

function Footer(props) {
    return (<>
    <footer className={props.cName}>
        <h4>{props.text}</h4>
    </footer>
    </>)
}

export default Footer;