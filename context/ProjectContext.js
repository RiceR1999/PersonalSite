import { createContext } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children, projectEnum }) => {
    return (
        <ProjectContext.Provider value={projectEnum}>
            {children}
        </ProjectContext.Provider >
    );
};

export { ProjectContext, ProjectProvider}