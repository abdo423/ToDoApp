import React, { useState } from 'react';
import SideBar from "./Components/SideBar";
import Project from "./Components/Project";
import CreateTask from "./Components/CreateTask";
import initialProjects from "./scripts/projects"; // Assuming this is an array of initial projects

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddTask = () => {
    setSelectedProject("CreateTask");
  };

  const handleDashboardReset = () => {
    setSelectedProject(null);
  };

  const handleTaskChoice = (projectID) => {
    setSelectedProject(projectID);
    console.log(projectID);
  };

  const submitTask = (task) => {
    const newProject = {
      title: task.taskTitle,
      description: task.taskDescription,
      id: projects.length + 1,
      date: task.taskDueDate,
      tasks: [],
    };
    setProjects([...projects, newProject]);
    setSelectedProject(null); // Optional: Reset after task creation
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    setProjects(updatedProjects);
    setSelectedProject(null);
  };

  const updateProjectTasks = (projectId, updatedTasks) => {
    const updatedProjects = projects.map((project) =>
      project.id === projectId ? { ...project, tasks: updatedTasks } : project
    );
    setProjects(updatedProjects);
  };

  return (
    <section className="h-screen w-auto flex flex-row gap-8 overflow-y-clip">
      <SideBar 
        projects={projects} 
        onAddTaskClick={handleAddTask} 
        onProjectChoice={handleTaskChoice} 
        selectedProjectId={selectedProject}
      />
      {selectedProject === "CreateTask" ? (
        <div className="mt-24 text-center w-2/3">
          <CreateTask onDashboardReset={handleDashboardReset} onTaskSubmit={submitTask} />
        </div>
      ) : (
        <Project 
          project={selectedProject ? projects.find(p => p.id === selectedProject) : null} 
          onAddTaskClick={handleAddTask} 
          selectedProjectId={selectedProject}
          onProjectDelete={handleDeleteProject}
          onUpdateTasks={updateProjectTasks}
        />
      )}
    </section>
  );
}

export default App;
