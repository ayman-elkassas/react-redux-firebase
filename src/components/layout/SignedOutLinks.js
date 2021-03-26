//todo:make stateless components if no state using it or use react hooks
import React from 'react';
import {NavLink} from 'react-router-dom'

function SignOutLinks(props) {
    return (
        <ul className="right">
            <li><NavLink to="/signup">SignUp</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>
    );
}

export default SignOutLinks;