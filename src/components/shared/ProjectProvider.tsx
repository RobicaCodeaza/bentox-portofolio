'use client';

import { createContext, useContext, useState } from 'react';
import React from 'react';

interface ProjectGroupContextValue {
  currentProject: number;

  setCurrentProject: React.Dispatch<React.SetStateAction<number>>;
}

const ProjectContext = createContext<ProjectGroupContextValue>({
  currentProject: 1,
  setCurrentProject: () => {},
});

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [currentProject, setCurrentProject] = useState(1);

  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (context === undefined)
    throw new Error('ProjectContext was used outside of the ProjectProvider');

  return context;
}
