import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import productImg from "../assets/7.png";
import Footer from "../components/footer";
import Product12 from "../componentsp/product12";
import "../componentsp/Banner.css";
import ogiImg from "../assets/8.png";

function product () {
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroimg={productImg}
        title=""
        text=""
        buttonText=""
        url="/"
        btnClass="show"
        />
        <Footer
        cName="banner"
        text="Nouveauté : Réserver dès maintenant 1h de séance de coaching personnalisé avec nos experts en Boxe !"/>
        <Product12
        title="Bonjour Alassane"
        cName3="Img-1"
        ogImg={ogiImg}/>
        <Footer
        cName="footer"
        text="© 2023 Weboxing. Tous Droits Réservés."/>

        </>
        
        
        
    )

}

export default product;