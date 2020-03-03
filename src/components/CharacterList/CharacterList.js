import React from "react";
// Import the CSS file as a module.
import styles from "./CharacterList.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
//Importing Character component
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
    console.log(e.target.value);
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
        <div className="character"  >
          <Character s={character}/>
        </div>

      //   <div>
      //     <Card className={styles.container_div}>
      //       <Card.Img style={{height: '15rem'}} src={character.image} alt={character.name} />
      //       <Card.Title className="mx-auto">{character.name}</Card.Title>  
      //       <Card.Text className="mx-auto">{character.status}</Card.Text>
      //       <Card.Text className="mx-auto">{character.species}</Card.Text>
      //       <Button variant="outline-primary" className="mx-3" >Details</Button>
      //     <br></br>
      //   </Card >
      //  </div>
      );
    });

    // Render MUST return valid JSX.
    return (
        <div className={styles.CharacterList}>
           <Navbar bg="light" variant="light">
            <Navbar.Brand className={styles.navbar_brand}>Rick n Mortay Task</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
              <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2">
                <i className="fas fa-search" aria-hidden="true"></i>
                <input
                 className="form-control form-control-sm ml-3 w-75"
                 type="text"
                 placeholder="Search"
                 aria-label="Search"
                 onChange={this.handleOnInputChange}
                 />
              </form>
              </Navbar.Text>
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
