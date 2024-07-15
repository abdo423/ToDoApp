import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icon you want to use
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const SideBar = (props) => {
  const handleClick = () => {
    props.onAddTaskClick();
  };
  const handleProjectClick = (id) => {
    props.onProjectChoice(id);
    console.log(id);
  };
  "props.projects:", props.projects;
  return (
    <div className=" bg-black flex flex-col h-screen w-96 rounded-tr-xl  mt-10 pl-10">
      <div>
        <h2 className="uppercase text-slate-50 text-3xl px-4 mt-20 ">
          Your Projects
        </h2>
      </div>
      <div className="flex m-5">
        <button
          onClick={() => handleClick()}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          <span>
            {/* Use the FontAwesomeIcon component and pass the icon */}
            <FontAwesomeIcon icon={faPlus} />
          </span>
          Add Project
        </button>
      </div>
      <div>
        <ul className=" px-4">
          {props.projects.map((project) => {
            let cssClasses =
              "flex justify-between my-4 text-stone-400  hover:text-stone-100 hover:bg-stone-600";
            if (project.id === props.selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }
            return (
              <li
                onClick={() => handleProjectClick(project.id)}
                key={project.id}
                className={cssClasses}
              >
                {project.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
