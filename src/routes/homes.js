// Pages
import Hero from "../components/hero";
import Hero4 from "../components/Hero4";
import Hero12 from "../components/hero12";
import Footer from "../components/footer"

// Images
import homeImg from "../assets/1.png";
import ncImg from "../assets/4.png";
import Navbaro from "../compo-/Navbaro";


function Homes () {
    return(
        <>
        <Navbaro />
        <Hero 
        cName="hero"
        heroimg={homeImg}
        title="WEBOXING"
        text="Bienvenue Jozy"
        buttonText=""
        url="/"
        btnClass="show"/>
        
        <Hero4 
        cName4="hero4"
        heroimg4={ncImg}
        title4="Nous Contacter" />
        
        <Hero12 
        cName221="formulaire"
        cName12="hero12"
        title12="News-Letter"
        text12="Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Weboxing !" />

        <Footer
        cName="footer"
        text="© 2023 Weboxing. Tous Droits Réservés."/>
        </>
        
    )
}

export default Homes;
