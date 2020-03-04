import React from 'react';
import Episode from '../Episode/Episode.js';
import Bio from '../Bio/Bio.js';
//import {Card, Button, Jumbotron} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./HomePage.module.css";

class HomePage extends React.Component {

    state= {
        character: Object,
        numberOfApperances: []
    };

// Use ASYNC/AWAIT inside lifecycle method.
async componentDidMount() {

    try{
        const id = this.props.match.params.id;
        const url ="https://rickandmortyapi.com/api/character/"+id;
        
        const response = await fetch(url).then(resp => resp.json());

        let chars = [...this.state.numberOfApperances];
        chars.push(...response.episode);
  
        this.setState({
            character:response,
            numberOfApperances:chars
        })

    } catch(e) {
        console.error(e);
    }
    
}

  render() {
    const episodes = this.state.numberOfApperances.map(episode =>{
        return(
            <div className={styles.e_container}>
                <Episode e={episode}></Episode>
            </div>
        );
    });

    return (
        <div>
            <div className={styles.background_div}>
                <Bio b={this.state.character}></Bio>
                <br></br>
            </div>

            <div className={styles.episode_card}>
            <h2 className={styles.homepage_h2}>Number of episodes</h2>
                {episodes}
            </div>
        </div>
    );
  }
}

export default HomePage;