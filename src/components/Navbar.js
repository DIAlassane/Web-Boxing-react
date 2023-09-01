import './Navbar.css';
import { Component } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import flagThin from '@iconify/icons-ph/flag-thin';
import { MenuItem } from './MenuItem';

class Navbar extends Component {
    // state

    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked }) 
    }
    // affichage
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo" >Weboxing</h1>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    { MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon} icon={flagThin} ></i> 
                                {item.title}{item.text}
                                </Link>
                            </li>
                        )
                    })}
                    <button></button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;