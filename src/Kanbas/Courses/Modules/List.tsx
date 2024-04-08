import React, { useEffect, useState } from "react";
import "./index.css";
// import { modules } from "../../Database";

import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";

import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";

import * as client from "./client";

// import { findModulesForCourse, createModule } from "./client";

import { KanbasState
 } from "../../store";

import { FaEllipsisVertical } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { IoBanOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


import "bootstrap/dist/js/bootstrap.bundle.min.js";


function ModuleList() {
    const { courseId } = useParams();
    
    useEffect(() => {
        client.findModulesForCourse(courseId)
          .then((modules) =>
            dispatch(setModules(modules))
        );
      }, [courseId]);

    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);

      const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
      };    

      const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
          dispatch(deleteModule(moduleId));
        });
      };

      const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    

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

            <h5>Editting/Adding New Courses</h5>

            <div className="d-flex flex-column">

                <div className="d-flex flex-column">
                    <div>
                        <label>Enter New Module Name: </label>
                    </div>

                    <div>
                        <input placeholder="New Module" value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
                    </div>
                </div>
                
                <br></br>

                <div className="d-flex flex-column">
                    <div>
                        <label>Enter a Brief Description: </label>
                    </div>

                    <div>
                        <textarea placeholder="New Description" value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />
                    </div>
                </div>

            </div>  

            <div className="d-flex up-down-adjust-sec"> 

                <div className="mini-tab-second">
                    {/* <button type="button" className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}> Add </button> */}
                    <button type="button" className="btn btn-success" 
                      onClick={handleAddModule}>
                        Add
                    </button>
                </div>
                <div>
                    {/* <button type="button" className="btn btn-info" onClick={() => dispatch(updateModule(module))}> Update</button> */}
                    <button type="button" className="btn btn-info" 
                      onClick={handleUpdateModule}>
                        Update
                    </button>
                </div>
            </div>

            <hr></hr>

            <ul className="list-group wd-modules">
                {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>      
                    <div>
                        <FaEllipsisV className="me-2" />
                            {module.name}
                        <span className="float-end">

                        <button type="button" className="btn btn-success" onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>
            
                        {/* <button type="button" className="btn btn-danger ms-2" onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button> */}
                        <button type="button" className="btn btn-danger ms-2" 
                            onClick={() => handleDeleteModule(module._id)}>
                                Delete
                        </button>

                        <FaCheckCircle className="text-success ms-2" />
                        <FaPlusCircle className="ms-2" />
                        <FaEllipsisV className="ms-2" />

                        </span>
                    </div>
                    {selectedModule && selectedModule._id === module._id && (
                    <ul className="list-group">
                        {module.lessons?.map((lesson : any) => (
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