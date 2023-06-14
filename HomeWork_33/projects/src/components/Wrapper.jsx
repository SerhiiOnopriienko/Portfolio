import React, { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MessagesSection from './Messages/MessagesSection';
import ProjectModal from './UI/Modal/ProjectModal';
import AddProject from './AddProject';
import ProjectSection from './Projects/ProjectSection';
import './Wrapper.css';
import { Outlet } from 'react-router-dom';

export default function Wrapper() {
  let [visible, setVisible] = useState(false);
    return (
      <>
      <ProjectModal visible={visible} setVisible={setVisible}>
        <AddProject />
      </ProjectModal>
      <div className='app-container'>
        <Header visible={visible} setVisible={setVisible}/>
      <div className='app-content'>
        <Sidebar />
        <div className="statistic-section">
          <Outlet />
        </div>
        <MessagesSection />
      </div>
      </div>
      </>      
    );
  }
  