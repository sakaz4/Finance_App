import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';


function Balance() {
    return (
    <div>
        <div>
            <h3>Your balance</h3>
            <div>$0</div>

            <div>
                <h2>Transactions</h2>
                <Link to="/transactions/">All</Link>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <Nav />          
        </div>
    </div>
    );
}

export default Balance;
