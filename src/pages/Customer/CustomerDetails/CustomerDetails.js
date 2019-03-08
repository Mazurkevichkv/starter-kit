import React, { Component } from 'react';
import './CustomerDetails.scss';

class CustomerDetails extends Component {
    render() {
        return (
            <section>
                Customer
                <h3>{this.props.match.params.customerId}</h3>
            </section>
        );
    }
}

export default CustomerDetails;
