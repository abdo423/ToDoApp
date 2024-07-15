import Task from "./Task";
import { useState } from "react";
const Tasks = ({ tasks ,onDeleteTask}) => {


  
   const onTaskDelete = (taskId) => { 
   onDeleteTask(taskId);    
   };

    
  
  return (
    <div className="flex flex-col my-10 bg-stone-100 p-10 rounded-xl">
      {tasks.map((task) => (
        <Task key={task.taskId} task={task} onTaskDelete={onTaskDelete} />
      ))}
    </div>
  );
};

export default Tasks;
