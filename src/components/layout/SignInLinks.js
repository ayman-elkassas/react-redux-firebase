/* eslint-disable jsx-a11y/anchor-is-valid */
//todo:make stateless components if no state using it or use react hooks
import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

function SignInLinks(props) {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>{dispatch(signOut())}
    }
}

export default connect(null,mapDispatchToProps)(SignInLinks);