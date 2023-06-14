import React, { useContext, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import {ProjectContextComponent} from '../../context/Context';
import './ProjectBoxes.css';

export default function ProjectBoxes({ classesView }){
    let [{allProjects}, dispatch] = useContext(ProjectContextComponent);
    return (
        <div className={classesView}>
            {allProjects.map((project) => 
                <ProjectCard project={project}/>
            )}
        </div>
    )
}