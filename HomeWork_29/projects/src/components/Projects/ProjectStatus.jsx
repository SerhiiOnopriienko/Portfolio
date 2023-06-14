import React from "react";

export default function ProjectStatus( {allProjects }){
    return (
        <div className="projects-status">
            <div className="item-status">
                <span className="status-number">{allProjects.filter(project => project.progress > 0 && project.progress < 100).length}</span>
                <span className="status-type">In Progress</span>
            </div>
            <div className="item-status">
                <span className="status-number">{allProjects.filter(project => project.progress === 0).length}</span>
                <span className="status-type">Upcoming</span>
            </div>
            <div className="item-status">
                <span className="status-number">{allProjects.length}</span>
                <span className="status-type">Total Projects</span>
            </div>
        </div>
    )
}