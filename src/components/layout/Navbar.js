//todo:make stateless components if no state using it or use react hooks
import React from 'react';
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignedOutLinks';

function Navbar(props) {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand=logo">Project App</Link>
                <SignInLinks/>
                <SignOutLinks/>
            </div>
        </nav>
    );
}

export default Navbar;