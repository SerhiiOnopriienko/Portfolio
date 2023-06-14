import React from 'react';
import ProjectContext from './context/Context';
import Wrapper from './components/Wrapper';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

export default function App() {
  return (
    <ProjectContext>
      <RouterProvider router={router} > 
        <Wrapper />
      </RouterProvider>
    </ProjectContext>
  );
}