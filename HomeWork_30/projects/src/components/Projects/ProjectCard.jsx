import React, { useContext } from 'react';
import './ProjectCard.css';
import { deleteProject } from '../../reducer/ProjectReducer';
import { ProjectContextComponent } from '../../context/Context'; 

function getRandomInt() {
    return `${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}`;
}

export default function ProjectCard({ project }){
    let [, dispatch] = useContext(ProjectContextComponent);
    function handleDelete(){
        dispatch(deleteProject(project.id));
        console.log(project)
    }
    const color = getRandomInt();
    return (
        <div className="project-box-wrapper" key={project.id}>
            <div className="project-box" style={{
            backgroundColor: `rgb(${color}, 0.5)`
        }}>
            <div className="project-box-header">
                <span>{project.date}</span>
                <div className="more-wrapper">
                    <button onClick={handleDelete} className="project-btn-more">
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
                        className="feather feather-more-vertical"
                        >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        </svg>        
                    </button>
                </div>
            </div>
            <div className="project-box-content-header">
                <p className="box-content-header">{project.taskField}</p>
                <p className="box-content-subheader">{project.taskName}</p>                </div>
                <div className="box-progress-wrapper">
                    <p className="box-progress-header">Progress</p>
                    <div className="box-progress-bar">
                        <span className="box-progress" style={{
                            backgroundColor: `rgb(${color})`,
                            width: `${project.progress}%`
                        }}></span>
                    </div>
                    <p className="box-progress-percentage">{`${project.progress}%`}</p>
                </div>
                <div className="project-box-footer">
                    <div className="participants">
                        {
                            project.partisipants.map(human => {
                                return (
                                    <img src={human} alt='humanLogo'></img>
                                )
                            })
                        }
                        <button className="add-participant" style={{
                            color: `rgb(${color})`
                        }}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                        >
                        <path d="M12 5v14M5 12h14" />
                        </svg>
                        </button>
                    </div>
                    <div className="days-left" style={{
                            color: `rgb(${color})`
                        }}>{project.daysLeft} Days Left</div>
                </div>
            </div>
        </div>
    )
}