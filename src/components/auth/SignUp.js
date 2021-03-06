import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

export class SignUp extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:'',
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(this.props.signIn())
        this.props.signUp(this.state)
    }

    render() { 
        const {authError}=this.props
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                    {authError?<p>{authError}</p>:null}
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError  
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        //*createProject is an arrow function return arrow function
        signUp:(cred)=>dispatch(signUp(cred))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
