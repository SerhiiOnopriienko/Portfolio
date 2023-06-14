import React, { useState, useEffect } from "react";
import ProjectBoxes from "./ProjectBoxes";
import allProjectsArray from '../../../src/data/allProjects.json';
import ProjectStatus from "./ProjectStatus";

export default function ProjectSection() {
    let [classesView, setClassesView] = useState('project-boxes jsGridView');
    let [buttonListClass, setbuttonListClass] = useState('view-btn');
    let [buttonGridClass, setbuttonGridClass] = useState('view-btn active');
    
    function changeViewToList(){
        setClassesView('project-boxes jsListView');
        setbuttonListClass('view-btn active');
        setbuttonGridClass('view-btn');
    }
    function changeViewToGrid(){
        setClassesView('project-boxes jsGridView');
        setbuttonListClass('view-btn');
        setbuttonGridClass('view-btn active');
    }
    let [allProjects, setAllProjects] = useState(allProjectsArray);
    return (
        <div className="projects-section">
            <div className="projects-section-header">
                        <p>Projects</p>
                        <p className="time">December, 12</p>
                    </div>
                    <div className="projects-section-line">
                        <ProjectStatus allProjects={allProjects}/>
                        <div className="view-actions">
                            <button onClick={changeViewToList} className={buttonListClass} title="List View">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-list"
                                >
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                            </button>
                            <button onClick={changeViewToGrid} className={buttonGridClass} title="Grid View">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-grid"
                                >
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </button>
                        </div>
                    </div>
            <ProjectBoxes allProjects={allProjects} classesView={classesView}/>
        </div>
    )
}