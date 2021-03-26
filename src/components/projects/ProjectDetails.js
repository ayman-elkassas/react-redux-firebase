import React from 'react'

function ProjectDetails(props) {
    // console.log(props.match.params.id)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {props.match.params.id}</span>
                    <p>Posted by the Ayman Elkassas</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the ayman elkassas</div>
                    <div>2nd september, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
