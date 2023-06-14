import { Navigate, createBrowserRouter } from 'react-router-dom';
import ProjectSection from '../components/Projects/ProjectSection';
import Statistic from '../components/NavComponents/Statistic';
import Schedule from '../components/NavComponents/Schedule';
import Settings from '../components/NavComponents/Settings';
import Wrapper from '../components/Wrapper';
import Login from '../components/Login/Login';
import ProtectedRouter from '../components/ProtectedRouter';


export const router = createBrowserRouter([
    {
        path: '/projects',
        element: (
            <ProtectedRouter>
               < Wrapper /> 
            </ProtectedRouter>),
        children: [
            {
                path: '/projects',
                element: <ProjectSection />,
            },
            {
                path: '/projects/statistic',
                element: <Statistic />,
            },
            {
                path: '/projects/schedule',
                element: <Schedule />,
            },
            {
                path: '/projects/settings',
                element: <Settings />,
            },
            {
                path: '*',
                element: <h1 style={{color: 'red'}}>Not found</h1>,
            },
        ],
    },
    {
        path: '/login',
        element: < Login />,
    },
    {
        path: '*',
        element: <Navigate to="/projects" />,
      },
])
