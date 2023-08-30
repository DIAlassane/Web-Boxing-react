import './Navbaro.css';
import { Component } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import flagThin from '@iconify/icons-ph/flag-thin';
import { MenuItems } from './MenuItems';

class Navbaro extends Component {
    // state

    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked }) 
    }
    // affichage
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Weboxing</h1>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    { MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon} icon={flagThin}></i> 
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <Link to="/">----</Link>
                </ul>
            </nav>
        )
    }
}

export default Navbaro;