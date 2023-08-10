import Navbar from "../components/Navbar";
// Pages
import Hero from "../components/hero";
import Hero2 from "../components/hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero12 from "../components/hero12";
import Footer from "../components/footer"

// Images
import homeImg from "../assets/1.png";
import actuImg from "../assets/2.png";
import qsnImg from "../assets/3.png";
import ncImg from "../assets/4.png";


function Home () {
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroimg={homeImg}
        title="WEBOXING"
        text=""
        buttonText=""
        url="/"
        btnClass="show"/>
        
        <Hero2 
        cName2="hero2"
        heroimg2={actuImg}
        title2="Actualité"
        text2="🥊 Nouveau cours de boxe de groupe ! 
        Rejoignez-nous pour une expérience d'entraînement 
        intense et dynamique. Notre entraîneur professionnel 
        vous guidera à travers des séances de boxe variées, 
        adaptées à tous les niveaux. Ne manquez pas cette occasion 
        de vous entraîner dans une ambiance conviviale et motivante. 
        Réservez votre place dès maintenant et venez découvrir les 
        bienfaits de la boxe pour votre corps et votre esprit ! 🥊"/>

        <Hero3 
        cName3="hero3"
        heroimg3={qsnImg}
        title3="Qui sommes nous ?"
        text3=" Chez Weboxing, nous sommes une équipe passionnée
        par la boxe et dévouée à offrir à nos clients une expérience
        exceptionnelle. 
        Notre objectif est de fournir des équipements de boxe de haute 
        qualité, soigneusement sélectionnés pour répondre aux besoins des 
        boxeurs de tous niveaux. De plus, nous sommes fiers de proposer des 
        services d'entraînement professionnels, dispensés par des coachs expérimentés, 
        pour vous aider à atteindre vos objectifs sportifs. 
        Rejoignez la communauté Weboxing dès aujourd'hui et découvrez notre 
        passion pour la boxe et notre engagement envers votre réussite sportive !"/>

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

export default Home;
