import React from 'react';
import ProjectContext from './context/Context';
import Wrapper from './components/Wrapper';

export default function App() {
  return (
    <ProjectContext>
      <Wrapper/>
    </ProjectContext>
  );
}
