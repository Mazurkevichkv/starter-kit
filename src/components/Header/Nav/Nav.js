import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import routes from '../../Routes/Routes.const';

export default () => {
    return (
        <ul className="flex centered nav">
            <Link to={routes.HOME}>Home</Link>
            <Link to={routes.BEERS_LIST}>Beers</Link>
        </ul>
    );
};
