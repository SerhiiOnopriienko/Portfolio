import React, { useContext, useMemo } from "react";
import './ProjectStatus.css';
import {ProjectContextComponent} from '../../context/Context';

export default function ProjectStatus(){
    let [{allProjects}, dispatch] = useContext(ProjectContextComponent);
    return (
        <div className="projects-status">
            <div className="item-status">
                <span className="status-number">{useMemo(() => allProjects.filter(project => project.progress > 0 && project.progress < 100).length, [allProjects])}</span>
                <span className="status-type">In Progress</span>
            </div>
            <div className="item-status">
                <span className="status-number">{useMemo(() => allProjects.filter(project => project.progress === 0).length, [allProjects])}</span>
                <span className="status-type">Upcoming</span>
            </div>
            <div className="item-status">
                <span className="status-number">{useMemo(() => allProjects.length)}</span>
                <span className="status-type">Total Projects</span>
            </div>
        </div>
    )
}