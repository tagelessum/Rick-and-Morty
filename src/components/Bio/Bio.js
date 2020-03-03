import React from 'react';


class Bio extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="container_wrapper">
                    <h1 className="container_h1">
                        {this.props.b.name}
                    </h1>
                </div>
                <div>
                    <img src={this.props.b.image} alt="Image of Character"></img>
                </div>
                <div>
                    <p>
                        Da NAM IS: {this.props.b.name}
                    </p>
                    <p>
                        ITS A FUKKIN ALIEN: {this.props.b.species}
                    </p>
                    <p>
                        EEEEWWW WAT IS DIS: {this.props.b.gender} HUMAN
                    </p>
                </div>
            </div>
        );
    }
}
export default Bio;