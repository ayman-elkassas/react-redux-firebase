//todo:make stateless components if no state using it or use react hooks
import React from 'react';
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignedOutLinks';

//*connectors with redux
import {connect} from 'react-redux'

function Navbar(props) {
    const {auth}=props
    // console.log(auth)
    const links=auth.uid?<SignInLinks/>:<SignOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand=logo">Project App</Link>
                {links}
            </div>
        </nav>
    );
}

const mapStateToProps=(state)=>{
    // console.log(state)
    return{
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);