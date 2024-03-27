//import { courses } from "../../Kanbas/Database";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import { FaAngleRight } from "react-icons/fa6";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";
import { FaGlasses } from "react-icons/fa";

import Navbar
 from "../Navbar";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {

    const { courseId } = useParams();
    const COURSES_API = `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
      const response = await axios.get(
        `${COURSES_API}/${courseId}`
      );
      setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);

      
    var str1 = new String(course?._id)

    const homePath = "/Labs/#/Kanbas/Courses/".concat(str1.toString()).concat("/Home");

    var pageNumber = new String(window.location.href);
    var wherePage = pageNumber.substring(pageNumber.lastIndexOf("/") + 1);
    var updatePage = wherePage.replace(/%20/g, " ");

    return (
        // breadcrumb
        <>
        <Navbar/>
            <div className="d-none d-md-block padding-overall">
                
                <div className="d-flex padding-sides">
                    <div className="d-flex flex-fill">
                        <div className="breadCrumbStyle">
                            <HiMiniBars3 /> 
                        </div>
                        <div className="paddingStyle">
                            <a className="linkDec" href={ homePath } style={{ color: "red"}}>{course?.name}</a>
                        </div>
                        <div className="paddingStyle">
                            <FaAngleRight /> 
                        </div>
                        <div> 
                            { updatePage }
                        </div>
                    </div>

                    <div className="pad-ri">
                        <button type="button" className="btn btn-outline-secondary btn-sm"><FaGlasses/>Student View</button>
                    </div>

                </div>
                <hr></hr>
            </div>

            <div className="d-flex">
                <div className="d-none d-md-block" style={{ width: "150px", flex: "0 0 auto"}}>
                    <CourseNavigation />
                </div>

        {/* Below is each individual screen for course (home, module... etc.)  FLEX-FILL*/}
            
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                    <Route path="People" element={<h1>People</h1>} />
                    <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                    <Route path="Discussions" element={<h1>Discussions</h1>} />
                    <Route path="Announcement" element={<h1>Announcement</h1>} />
                    <Route path="Pages" element={<h1>Pages</h1>} />
                    <Route path="Files" element={<h1>Files</h1>} />
                    <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                    <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                    <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                    <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                    <Route path="Settings" element={<h1>Settings</h1>} />
                </Routes>
                
            </div>
        </>
    );
}
export default Courses;