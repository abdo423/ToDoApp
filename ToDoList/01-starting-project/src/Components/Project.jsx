import React, { useState } from "react";
import ToDoImage from "../assets/no-projects.png";
import Tasks from "./Tasks";

const Project = ({
  project,
  onAddTaskClick,
  selectedProjectId,
  onProjectDelete,
  onUpdateTasks,
}) => {
  const [subTask, setSubTask] = useState("");

  const onDeleteTask = (taskId) => {
    if (project) {
      const updatedTasks = project.tasks.filter(
        (task) => task.taskId !== taskId
      );
      onUpdateTasks(project.id, updatedTasks);
    }
  };

  const addSubTask = () => {
    if (project && project.id === selectedProjectId && subTask) {
      const newTask = {
        taskTitle: subTask,
        taskId: project.tasks.length + 1,
      };
      const updatedTasks = [...project.tasks, newTask];
      onUpdateTasks(project.id, updatedTasks);
      setSubTask(""); // Clear input field after adding task
    } else {
      return;
    }
  };

  const handleProjectDelete = () => {
    onProjectDelete(project.id);
  };

  if (!project) {
    return (
      <div className="flex flex-col justify-center items-center h-2/3 w-full gap-4">
        <img className="w-[75px] h-[75px]" src={ToDoImage} alt="No projects" />
        <h2 className="text-2xl text-stone-700 font-bold my-4">
          No project selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a project or get started with a new one
        </p>
        <button
          onClick={onAddTaskClick}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Create a project
        </button>
      </div>
    );
  }

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="mt-[8rem] flex flex-col w-[45rem]">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <button
          onClick={handleProjectDelete}
          className="text-stone-700 hover:text-red-500"
        >
          Delete
        </button>
      </div>
      <p className="text-stone-600 whitespace-pre-wrap">{formattedDate}</p>
      <div>
        <p className="flex flex-col gap-1 my-4 whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
      <hr />
      <h2 className="text-2xl font-bold text-stone-700 mb-4 my-4">Tasks</h2>
      <div className="flex items-center gap-3">
        <input
          value={subTask}
          onChange={(e) => setSubTask(e.target.value)}
          className="w-[300px] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
        <button
          onClick={addSubTask}
          className="text-stone-600 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      <Tasks tasks={project.tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default Project;
