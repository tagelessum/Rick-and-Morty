import React from 'react';
import Episode from '../Episode/Episode.js';
import Bio from '../Bio/Bio.js';

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
            <div>
                <Episode e={episode}></Episode>
                <br></br>
            </div>
        );
    });

    return (
        <div>
            <div>
            <div>
                <Bio b={this.state.character}></Bio>
                <br></br>
                <h2>Episode Apperances</h2>
            </div>
            <div>
                {episodes}
            </div>
            </div>
        </div>
    );
  }
}

export default HomePage;