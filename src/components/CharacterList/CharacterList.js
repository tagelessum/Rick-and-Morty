import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// Importing Character component
import Character from '../Character/Character.js';

// Constant To store API url.
const API_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList extends React.Component {
  // Initialize the State in Class Component.
  constructor() {
    super();

    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }
  state = {
    displayedChar: [],
    characters: [],
    id: 0
  };

  handleOnInputChange(e){
    this.setState({
      displayedChar: this.state.characters.filter(s => s.name.includes(e.target.value))
    });
  }

  // Use ASYNC/AWAIT inside lifecycle method.
  async componentDidMount() {
    try {
      const response = await fetch(API_URL).then(resp => resp.json());
      // Add the current characters to the chars array.
      let chars = [...this.state.characters];
      // Add the results from the API response.
      chars.push(...response.results);
      // ALWAYS use this.setState() in a Class Method.
      this.setState({
        characters: chars,
        displayedChar: chars
      });
    } catch (e) {
      console.error(e);
    }
  }
  // Required render() method in Class Component.
  render() {
    // Create an array of JSX to render
    const characters = this.state.displayedChar.map(character => {
      // This should render Character components. - Remember the key.
      return (
        <div className={styles.card_list}>
          <Character s={character}/>
        </div>
      );
    });

    // Render MUST return valid JSX.
    return (
        <div className={styles.CharacterList}>
           <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <img
                  src="https://firebasestorage.googleapis.com/v0/b/jquerypost.appspot.com/o/Webp.net-gifmaker.gif?alt=media&token=5e757ae8-fd07-46cf-a7e0-225c8b835aef"
                  alt="Crig Marais"
                  width="50"
                  height="50"
                  className="d-inline-block align-top ml-5"
              />
            </Navbar.Brand>
            <Navbar.Brand className={styles.navbar_brand}>Rick n Mortay Task</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">   
                <input
                 className={styles.searchBar}
                 type="text"
                 //img src="https://img.icons8.com/doodle/48/000000/search--v1.png"
                 placeholder="Search"
                //  aria-label="Search"
                 onChange={this.handleOnInputChange}
                 />
            </Navbar.Collapse>
          </Navbar>
            <br></br>
            <br></br>
          <div className={styles.char}>{characters}</div>
        </div>
    );
  }
}

export default CharacterList;
