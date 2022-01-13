import React from 'react';
import {Link} from 'react-router-dom';


function Start() {
    return (
        <div>
            <h3>Finance App</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, autem.</p>
            <Link to="/balance/">Get started</Link>
        </div>
    );
}

export default Start;
