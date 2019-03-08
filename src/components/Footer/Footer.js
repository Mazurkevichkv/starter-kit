import React from 'react';
import './Footer.scss';

export default () => {
    return (
        <footer className="flex verticaly-centered">
            <ul className="flex centered push-right">
                <li>footer item 1</li>
                <li>footer item 2 </li>
                <li>footer item 3</li>
            </ul>
        </footer>
    );
};
