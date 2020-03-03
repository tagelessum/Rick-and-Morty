// Write a function component 
// Simply display a character in the form of a card: https://www.w3schools.com/howto/howto_css_cards.asp
// Style the card however you like.
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Card from "react-bootstrap/Card";

class Character extends React.Component {
    render() {
        return(
        <div>
            <div>
                <img src={this.props.s.image} alt={this.props.s.name}/>
                <div>
                    <h4>{this.props.s.name}</h4>
                    <p>{this.props.s.status}</p>
                    <Link to={`/characters/${this.props.s.id}`}>HomePage</Link> 
                </div>
            </div>
        </div>
        );
    }
}
export default Character;
