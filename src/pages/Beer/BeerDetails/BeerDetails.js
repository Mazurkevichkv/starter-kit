import React, { Component } from 'react';
import './BeerDetails.scss';

class BeerDetails extends Component {
    render() {
        return (
            <section>
                Beer
                <h3>{this.props.match.params.beerId}</h3>
            </section>
        );
    }
}

export default BeerDetails;
