import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import BeersList from '../../pages/Beer/BeersList/BeersList';
import BeerDetails from '../../pages/Beer/BeerDetails/BeerDetails';
import CustomersList from '../../pages/Customer/CustomerList/CustomersList';
import CustomerDetails from '../../pages/Customer/CustomerDetails/CustomerDetails';
import routes from './Routes.const';

export default () => (
    <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.LOGIN} component={Login} />
        <Route exact path={routes.BEERS_LIST} component={BeersList} />
        <Route path={routes.BEER_DETAILS} component={BeerDetails} />
        <Route exact path={routes.CUSOMERS_LIST} component={CustomersList} />
        <Route path={routes.CUSTOMER_DETAILS} component={CustomerDetails} />
    </Switch>
);
