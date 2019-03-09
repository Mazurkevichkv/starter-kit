import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import './App.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default () => {
    // const children = { props };
    return (
        <Router>
            <div className="app flex flex-column">
                <Header />
                <div className="flex content">
                    <div className="view">
                        <Routes />
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
};
