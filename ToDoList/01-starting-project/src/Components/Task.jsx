const Task = (props) => {
 


  return (
    <div className="flex justify-between items-center w-full h-2/3 mb-2">
      <p className="text-stone-600">{props.task.taskTitle}</p>
      <button
      onClick={() => props.onTaskDelete(props.task.taskId)}
        
        className="text-stone-700 hover:text-red-500"
      >
        Clear
      </button>
    </div>
  );
};

export default Task;
