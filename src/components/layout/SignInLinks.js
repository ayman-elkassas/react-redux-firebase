//todo:make stateless components if no state using it or use react hooks
import React from 'react';
import {NavLink} from 'react-router-dom'

function SignInLinks(props) {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    );
}

export default SignInLinks;