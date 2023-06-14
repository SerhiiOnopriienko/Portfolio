import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProjectSection from './components/Projects/ProjectSection';
import MessagesSection from './components/Messages/MessagesSection';

export default function App() {
  
  return (
    <div className='app-container'>
      <Header />
      <div className='app-content'>
      <Sidebar />
      <ProjectSection />
      <MessagesSection />
      </div>
    </div>
  );
}
