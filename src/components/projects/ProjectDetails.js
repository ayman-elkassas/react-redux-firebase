import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

function ProjectDetails(props) {
    // console.log(props.match.params.id)
    const {project}=props
    if(project){
        return (
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">Project Title - {project.title}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by the {project.authorFirstName} {project.authorLastName}</div>
                            <div>2nd september, 2am</div>
                        </div>
                    </div>
                </div>
        )
    }else{
        return (
            <div className="container center">
                <p className="loading">Loading project</p>
            </div>
        )
    }
    
}

const mapStateToProps=(state,ownProps)=>{

    const id=ownProps.match.params.id;
    const projects=state.firestore.data.projects
    const project=projects?projects[id]:null

    return{
        project:project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails)
