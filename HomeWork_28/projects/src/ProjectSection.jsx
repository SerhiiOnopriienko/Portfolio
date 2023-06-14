import React, { useState } from "react";

const allProjectsArray = [
    {
        id: 1,
        date: 'December 10, 2020',
        taskField: 'Web Designing',
        taskName: 'Prototyping',
        progress: 60,
        partisipants: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'],
        daysLeft: 2,
    },
    {
        id: 2,
        date: 'December 19, 2020',
        taskField: 'Testing',
        taskName: 'Prototyping',
        progress: 50,
        partisipants: ['https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80', 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80'],
        daysLeft: 5,
    },
    {
        id: 3,
        date: 'December 20, 2020',
        taskField: 'Svg Animations',
        taskName: 'Prototyping',
        progress: 80,
        partisipants: ['https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60', 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80'],
        daysLeft: 6,
    },
    {
        id: 4,
        date: 'December 22, 2020',
        taskField: 'UI Development',
        taskName: 'Prototyping',
        progress: 20,
        partisipants: ['https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', 'https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'],
        daysLeft: 9,
    },
    {
        id: 5,
        date: 'December 22, 2020',
        taskField: 'Data Analysis',
        taskName: 'Prototyping',
        progress: 60,
        partisipants: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'],
        daysLeft: 9,
    },
    {
        id: 6,
        date: 'December 23, 2020',
        taskField: 'Web Designing',
        taskName: 'Prototyping',
        progress: 40,
        partisipants: ['https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2555&amp;q=80'],
        daysLeft: 10,
    },
];

function getRandomInt() {
    return `${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}`;
  }

export default function ProjectSection() {
    let [allProjects, setAllProjects] = useState(allProjectsArray);
    return (
        <>
        <div className="projects-section">
            <div className="projects-section-header">
                        <p>Projects</p>
                        <p className="time">December, 12</p>
                    </div>
                    <div className="projects-section-line">
                        <div className="projects-status">
                            <div className="item-status">
                            <span className="status-number">4</span>
                                <span className="status-type">In Progress</span>
                            </div>
                            <div className="item-status">
                                <span className="status-number">24</span>
                                <span className="status-type">Upcoming</span>
                            </div>
                            <div className="item-status">
                            <span className="status-number">{allProjects.length}</span>
                                <span className="status-type">Total Projects</span>
                            </div>
                        </div>
                        <div className="view-actions">
                            <button className="view-btn list-view" title="List View">
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
                            <button className="view-btn grid-view active" title="Grid View">
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
            <div className="project-boxes jsGridView">
                {allProjects.map((project) => {
                    const color = getRandomInt();
                    return (
                        <div className="project-box-wrapper" key={project.id}>
                    <div className="project-box" style={{
                        backgroundColor: `rgb(${color}, 0.5)`
                    }}>
                        <div className="project-box-header">
                            <span>{project.date}</span>
                            <div className="more-wrapper">
                                <button className="project-btn-more">
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
                            <p className="box-content-subheader">{project.taskName}</p>
                        </div>
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
                })}
            </div>
        </div>
        </>
    )
}