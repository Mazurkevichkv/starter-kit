import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default () => {
    return (
        <div className="app flex flex-column">
            <Header />
            <div className="flex content">
                <div className="view" />
            </div>
            <Footer />
        </div>
    );
};
