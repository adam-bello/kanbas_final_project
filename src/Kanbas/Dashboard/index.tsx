import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }
)

 {
  return (
    <>
    <div className="d-block d-md-none botPad">
          <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
              <a href="/Kanbas/Navigation/index2.html">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
              </a>
              <a className="navbar-brand" href="#">Dashboard</a>
              &nbsp;
          </div>
          </nav>
    </div> 


    <div className="p-4">
        <h1>Dashboard</h1>              <hr />
        <h5>Editting/Adding New Courses</h5>

        <br/>

        <label>Enter the Course Name:</label>
        <input placeholder="New Course" value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

        <br/>

        <label>Enter the Course Number:</label>
        <input placeholder="New Number" value={course.number} className="form-control" 
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

        <br/>

        <label>Enter the Start Date of the Course:</label>
        <input placeholder="2023-09-10" value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

        <br/>

        <label>Enter the End Date of the Course:</label>
        <input placeholder="2023-12-15" value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

        <br/>
              
        <label>Enter a Brief Course Description:</label>
        <input placeholder="New Description" value={course.description} className="form-control" 
              onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

        <br/>

        <label>Enter the Image Name for Course (Ensure that the image name is correct and in the correct file):</label>
        <input placeholder="New Image" value={course.image} className="form-control" 
              onChange={(e) => setCourse({ ...course, image: e.target.value }) } />

        <br/>

        <div className="d-flex up-down-adjust"> 

            <div className="mini-tab">
              <button type="button" className="btn btn-success" onClick={addNewCourse} >
                Add
              </button>
            </div>

            <div>
              <button type="button" className="btn btn-info" onClick={updateCourse} >
                Update
              </button>
            </div>

        </div>

          

        <div className="ps-2">
            <h2>Published Courses (8)</h2>   <hr />
            <div className="flex-row flex-wrap">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }}/>
                                <div className="card-body">
                                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}> 
                                      {course.name}
                                  </Link>

                                  <p className="card-text">{course.description}</p>

                                  <div className="d-flex">
                                      <div className="pad-Right-btn">

                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                          Go </Link>

                                      </div>

                                      <div className="pad-Right-btn">
                                          <button type="button" className="btn btn-secondary" onClick={(event) => {event.preventDefault(); setCourse(course); }}>
                                              Edit
                                          </button>

                                      </div>
                      
                                      <div> 
                                          <button type="button" className="btn btn-danger" onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                                              Delete
                                          </button>
                                      </div>

                                  </div>

                                </div>
                            </div>
                        </div>
                         ))}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Dashboard;