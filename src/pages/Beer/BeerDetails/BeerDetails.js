import React, { Component } from 'react';
import './BeerDetails.scss';

class Home extends Component {
    render() {
        return (
            <section>
                Beer
                <h3>{this.props.match.params.beerId}</h3>
            </section>
        );
    }
}

export default Home;