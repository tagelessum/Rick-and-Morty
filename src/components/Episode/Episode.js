import React from 'react';
import styles from "./Episode.module.css";

class Episode extends React.Component{
   
    state = {
        apperance:Object
    };
    async componentDidMount() {
        try{
            const episodeurl = this.props.e;
            const URL ="https://cors-anywhere.herokuapp.com/" + episodeurl ; 
            const response = await fetch(URL).then(resp => resp.json());
            this.setState({
                apperance:response
            })

        } catch(e) {
            console.error(e);
        }
    }

    render(){
        return(
           <div className="container">
            <div className={styles.episode_wrapper}>
            <div className="card mx-auto">
                <div className="card-body">
                    Episode: {this.state.apperance.episode}
                </div>  
                <div className="card-body">
                    <p className="card-text">Episode name: {this.state.apperance.name}</p>
                    <p className="card-text">On tv:  {this.state.apperance.air_date}</p>
                </div>
            </div>
            </div>
            </div>
        );
    }
}
export default Episode;