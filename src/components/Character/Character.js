// Write a function component 
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

class Character extends React.Component {
    render() {
        return(
        <div>
            <div>
                <img src={this.props.c.image} alt={this.props.c.name}/>
                <div>
                    <h4>{this.props.c.name}</h4>
                    <p>{this.props.c.status}</p>
                    <p to={`/characters/${this.props.c.id}`}>Home Page</p> 
                </div>
            </div>
        </div>
        );
    }
}
export default Character;
