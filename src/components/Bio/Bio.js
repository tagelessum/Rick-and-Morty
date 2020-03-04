import React from 'react';
import styles from "./Bio.module.css";
import {Card, Button, Jumbotron} from "react-bootstrap";
class Bio extends React.Component {

    render() {
        return (
            <div className="container mx-auto">
              <div className={styles.parent}>
              <div className=" card mx-auto mt-5">
                <img src={this.props.b.image}  alt={this.props.b.name}></img>
                </div>

               <div style={{ width: '18rem' }} className="card mx-auto mt-5">
                <div className="card-header">Details</div>
                <p className="card-text">Name: {this.props.b.name}</p>
                <p className="card-text">Species: {this.props.b.species}</p>
                <p className="card-text">Gender: {this.props.b.gender}</p>
               </div>
              </div>
            </div>
        );
    }
}
export default Bio;