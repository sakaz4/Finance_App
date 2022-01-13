import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

function Transactions() {
    return (
    <div>
        <header>
            <Link to="/balance/">&larr;</Link>
            <h3>Transactions</h3>
        </header>
        
        <ul>
            <li>...</li>
        </ul>

        <Nav />
    </div>
    );
}

export default Transactions;
