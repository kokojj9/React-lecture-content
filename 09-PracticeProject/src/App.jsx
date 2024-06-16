import { useState } from 'react';
import NewProjects from './components/NewProjects.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleSelectProject = id => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleCancelAddProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  const handleAddProject = projectData => {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId : undefined,
        projects: [...prevState.projects, newProject]
      };
    })
  };
  

  const handleDeleteProject = () => {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId
        ) // find 와 map 과 비슷하게 함수를 입력받아서 projects배열의 모듬 함수에 실행됩니다. true면 지워줌
      };
    });
  }


  const selectProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectProject} onDelete={handleDeleteProject} />;

  if(projectState.selectedProjectId === null) {
    content = <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }






  return (
    <main className="h-screen my-8 flex gap-8"> 
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects} 
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
