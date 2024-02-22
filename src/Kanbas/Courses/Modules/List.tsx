import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { FaEllipsisVertical } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoBanOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


import "bootstrap/dist/js/bootstrap.bundle.min.js";


function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>

      <div className="buttonEnd">
            <div>
                <button type="button" className="btn btn-outline-secondary btn-sm">Collapse All</button>
            </div>
            <div className="padBoth">
                <button type="button" className="btn btn-outline-secondary btn-sm">View Progress</button>
            </div>
            
            <div className="btn-group">
                <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    <CiCircleCheck style={{ color: "green" }}/>Publish All  
                </button>
                <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                    <li><a className="dropdown-item" href="#"><CiCircleCheck style={{ color: "green" }}/>Publish all modules and items</a></li>
                    <li><a className="dropdown-item" href="#"><CiCircleCheck style={{ color: "green" }}/>Publish modules only</a></li>
                    <li><a className="dropdown-item" href="#"><IoBanOutline />Unpublish all modules and items</a></li>
                    <li><a className="dropdown-item" href="#"><IoBanOutline />Unpublish modules only</a></li>
                </ul>
            </div>

            <div className="padBoth">
                <button type="button" className="btn btn-danger btn-sm"><FaPlus/>Module</button>
            </div>
            
            <button type="button" className="btn btn-outline-secondary btn-sm"><FaEllipsisVertical /></button>

        </div> 
        
    <div className="spacing">
        <hr></hr>

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
export default ModuleList;