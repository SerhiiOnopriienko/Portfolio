import { createContext, useReducer } from "react";
import { projectReducer, initialState } from '../reducer/ProjectReducer';

export const ProjectContextComponent = createContext({});

export default function ProjectContext( { children } ){
    const [state, dispatch] = useReducer(projectReducer, initialState);
    
    return (
        <ProjectContextComponent.Provider value={[state, dispatch]}>
            {children}
        </ProjectContextComponent.Provider>
    )
}