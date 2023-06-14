import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectBoxes({ allProjects, classesView }){
    return (
        <div className={classesView}>
            {allProjects.map((project) => 
                <ProjectCard project={project}/>
            )}
        </div>
    )
}