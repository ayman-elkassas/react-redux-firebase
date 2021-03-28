import React,{Component} from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
//todo:Redux Connectors
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import firebase from 'firebase/app'

class Dashboard extends Component {
    render() {
        
        const {projects} =this.props
        // console.log(auth)
        
        // auth().onAuthStateChanged((user)=>{
        //     if(!user){
        //         return <Redirect to="/signin"/>
        //     }
        // })

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    if(JSON.stringify(state.firestore.ordered)!=="{}"){
        return{
            //*project is projectReducer mapped in 
            projects:state.firestore.ordered.projects,
            //*you can fetch another state from another reducer
            auth:firebase.auth().onAuthStateChanged
        }
    }else{
        return {projects:state.project.projects}
    }
}

//todo:using compose from redux to connect to combine

export default compose(
    connect(mapStateToProps,null),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard)