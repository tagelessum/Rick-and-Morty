import React from 'react';

class Episode extends React.Component{
   
    state = {
        apperance:Object
    };
    async componentDidMount() {
        try{
            const epurl = this.props.e;
            const url ="https://cors-anywhere.herokuapp.com/" + epurl ;
            
            const response = await fetch(url).then(resp => resp.json());
            console.log(response);
            this.setState({
                apperance:response
            })

        } catch(e) {
            console.error(e);
        }
    }

    render(){
        return(
            <div className="tile">
               <div className="card">
                    <header className="card-header is-centered">
                        <h1 className="card-header-title is-centered">
                            {this.state.apperance.episode}
                        </h1>
                        
                    </header>
                    <div className="card-content">
                        <div className="container">
                            <p>{this.state.apperance.name}</p>
                            <br></br>
                            <p>Air date: {this.state.apperance.air_date}</p>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}
export default Episode;