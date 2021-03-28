import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

function ProjectList({projects}) {

    if((JSON.stringify(projects)!=="{}")){
        var mapProjectSummary=projects.map((project, key) => {
            return (
                <Link to={'/project/'+project.id} key={project.id}>
                    <ProjectSummary project={project}/> 
                </Link>
            )
        })
    }
    return (
        <Fragment>
            {mapProjectSummary}
        </Fragment>
    );
}

export default ProjectList;