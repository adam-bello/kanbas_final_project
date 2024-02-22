import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaEllipsisVertical } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";


function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>

    <div className="flex-fill distNav">

        <div className="d-flex flex-column">

            <div className="d-flex padUpper"> 
                <div className="flex-fill">
                    <div className="inputStyle input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search For Assignment"></input>
                    </div>
                </div>

                <div className="d-flex buttonEnd2">   
                    <div>
                        <button type="button" className="btn btn-outline-secondary btn-sm"><IoIosAdd />Group</button>
                    </div>

                    <div className="padBoth">
                        <button type="button" className="btn btn-danger btn-sm"><IoIosAdd />Assignment</button>
                    </div>     

                    <div>
                        <button type="button" className="btn btn-outline-secondary btn-sm"><FaEllipsisVertical /></button>
                    </div>
                </div>

            </div>

            <div className="padBottom2">
                <hr></hr>
            </div>
            

            <div>
                <ul className="list-group wd-modules">
                    <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                        <li className="list-group-item">
                            <div className="d-flex">
                                <div className="icon-pad buttonEnd2">
                                    <FaEllipsisV className="me-2" />
                                </div>
                                <div className="icon-pad buttonEnd2 additionPad">
                                    <GiNotebook style={{ color: "green"}}/>
                                </div>
                                <div className="d-flex flex-column flex-fill">
                                    <div>
                                        <b><Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="link-style" style={{color: "black"}}>{assignment.title}</Link></b>
                                    </div>
                                    <div className="d-flex">
                                        <div className="adjustPos">
                                           <a style={{color: "red"}}> {assignment.status} </a>| <b>Due</b> {assignment.due} | {assignment.grade}
                                        </div>
                                    </div>
                                </div>
                                
                                    <span className="float-end icon-pad"><FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                      
                            </div>
                        </li>))}
                    </ul>
                    
                    </li>
                </ul>
        </div>

        </div>
      </div>
    </>
);}
export default Assignments;