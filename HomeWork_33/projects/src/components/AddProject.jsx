import React, { useContext, useState } from 'react';
import './AddProject.scss';
import { v4 as uuidv4 } from 'uuid';
import { addProject } from '../reducer/ProjectReducer';
import { ProjectContextComponent } from '../context/Context';

function AddProject() {
  const [{allProjects}, dispatch] = useContext(ProjectContextComponent);
  const [newProject, setNewProject] = useState('');
  const [startDate, setStartNewDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = function(event) {
    event.preventDefault();
    if(addProject){
      const project = {
        id: uuidv4(),
        date: `${new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(startDate))} ${new Date(startDate).getDate()}, ${new Date(startDate).getFullYear()}`,
        taskField: newProject,
        taskName: 'Prototyping',
        progress: 0,
        partisipants: [],
        daysLeft: new Date (new Date(endDate) - new Date(startDate)).getDate(),
      }
      dispatch(addProject(project));
    } else {
      const project = {...allProjects}
    }
  }

  return (
    <>
      <h3 className="app-name">Add new project</h3>
      <form onSubmit={onSubmit} className="new-project">
        <label htmlFor="title">Project title</label>
        <div className="search-wrapper new-project">
          <input
            id="title"
            className="search-input"
            type="text"
            placeholder="Enter title"
            value={newProject}
            onChange={(event) => setNewProject(event.target.value)}
          />
        </div>

        <label htmlFor="startDate">Start date</label>
        <div className="search-wrapper new-project">
          <input 
          id="startDate" 
          className="search-input" 
          type="date" 
          value={startDate}
          onChange={(event) => setStartNewDate(event.target.value)}/>
        </div>

        <label htmlFor="deadline">Deadline</label>
        <div className="search-wrapper new-project">
          <input 
          id="deadline" 
          className="search-input" 
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
           />
        </div>
        <button className="create-project">Create Project</button>
      </form>
    </>
  );
}

export default AddProject;