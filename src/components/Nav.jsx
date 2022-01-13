import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/balance/">Balance</Link></li>
                <li><Link to="/cards/">Cards</Link></li>
                <li><Link to="/transactions/">Transactions</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
