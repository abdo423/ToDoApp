import React, { useState,useRef } from "react";
import Modal from "./Modal";  
const CreateTask = (props) => {
  const handleDasboardReset = () => {
    props.onDashboardReset();
  };
  const handleDataChange = (key, value) => {
    setTask((prevTask) => ({ ...prevTask, [key]: value }));
  };
  const modalRef = useRef();  
  const [task, setTask] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDueDate: "",
  });
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (
      task.taskTitle === "" ||
      task.taskDescription === "" ||
      task.taskDueDate === ""
    ) {
      modalRef.current.openModal(); 
      return;
    }
    props.onTaskSubmit(task);
    setTask({
      taskTitle: "",
      taskDescription: "",
      taskDueDate: "",
    });
    handleDasboardReset();
  };
  (task);
  return (
    <>
    <Modal ref={modalRef}>
      <h2 className="text-2xl text-stone-700 font-bold my-4"> oops something went wrong</h2>
      <p className="text-stone-500 mb-4">please fill all the fields</p> 
      <p className="text-stone-500 mb-4">click outside the modal to close</p>
    </Modal>
      <div className="mt-4 text-left">
        <div className="flex  mb-8 justify-end gap-4">
          <button onClick={props.onDashboardReset}>Cancel</button>
          <button onClick={handleTaskSubmit} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </div>
        <div>
          <div className="mb-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Title
            </label>
            <input
            
              onChange={(e) => {
                handleDataChange("taskTitle", e.target.value);
              }}
              value={task.taskTitle}
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              description
            </label>
            <textarea
            
              value={task.taskDescription}
              onChange={(e) => {
                handleDataChange("taskDescription", e.target.value);
              }}
              type="textarea"
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Due date
            </label>
            <input
            
              value={task.taskDueDate}
              onChange={(e) => {
                handleDataChange("taskDueDate", e.target.value);
              }}
              type="date"
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateTask;
