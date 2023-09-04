import "../componentsp/Banner.css";
import Button from "./Button";
import Comp from "./comp";
import Hero12 from "../components/hero12";


function Product12(props) {
    return(
        <div className="lechant">
            <h1>{props.title}</h1>
                <Button
                cName2="button"
                text="All"
                cName="span"
                text2="actuality"/>
            <img className={props.cName3} src={props.ogImg} alt="ImageWeboxing" />
                <Button
                cName2="button button2"
                href="/Weboxes"
                text="All"
                cName="span"
                text2="product"/>
                
                <div className="flexu">
                    <Comp 
                    cName="sect1"
                    href1=""
                    href=""
                    title="PROTECTION"/>
                    <Comp 
                    cName="sect2"
                    href1=""
                    href=""
                    title="SANTER"/>
                    <Comp 
                    cName="sect3"
                    href1=""
                    href=""
                    title="EQUIPEMENT"/>
                </div>

                <Button
                cName2="button button3"
                href="/Service"
                text="All"
                cName="span"
                text2="services"/>

                <div className="flexu">
                    <Comp 
                    cName="sect4"
                    href1=""
                    href=""
                    title="JUNIOR"/>
                    <Comp 
                    cName="sect5"
                    href1=""
                    href=""
                    title="SENIOR"/>
                    <Comp 
                    cName="sect6"
                    href1=""
                    href=""
                    title="EXPERT"/>
                </div>
                <Hero12 
                cName221="formulaire"
                cName12="hero12"
                title12="News-Letter"
                text12="Inscrivez-vous à notre newsletter 
                pour rester informé(e) et connecté(e) avec Weboxing !" />


        </div>
    )
}

export default Product12;