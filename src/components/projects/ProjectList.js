import React, { Fragment } from 'react';
import ProjectSummary from './ProjectSummary';

function ProjectList({projects}) {

    if((JSON.stringify(projects)!=="{}")){
        var mapProjectSummary=projects.map((project, key) => {
            return <ProjectSummary project={project} key={project.id}/>
        })
    }

    return (
        <Fragment>
            {mapProjectSummary}
        </Fragment>
    );
}

export default ProjectList;