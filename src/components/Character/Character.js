// Write a function component 
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
//import {Card, Button} from "react-bootstrap";
//Importing css
//import styles from "./Character.module.css";

class Character extends React.Component {
    render() {
        return(
            <div className="card mx-auto">
                <img className="card-img-top" src={this.props.s.image} alt={this.props.s.name}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.s.name}</h5>
                <p className="card-text">{this.props.s.status}</p>
                <Link className="btn btn-primary" to={`/characters/${this.props.s.id}`}>Go to details</Link> 
            </div>
        </div>
        );
    }
}
export default Character;
