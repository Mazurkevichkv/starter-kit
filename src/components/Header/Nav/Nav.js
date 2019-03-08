import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import routes from '../../Routes/Routes.const';

export default () => {
    return (
        <ul className="flex centered nav">
            <NavLink
                className="nav-link"
                activeClassName="nav-link--active"
                to={routes.HOME}
                exact
            >
                Home
            </NavLink>
            <NavLink
                className="nav-link"
                activeClassName="nav-link--active"
                to={routes.CUSOMERS_LIST}
            >
                Customers
            </NavLink>
            <NavLink
                className="nav-link"
                activeClassName="nav-link--active"
                to={routes.BEERS_LIST}
            >
                Beers
            </NavLink>
        </ul>
    );
};
