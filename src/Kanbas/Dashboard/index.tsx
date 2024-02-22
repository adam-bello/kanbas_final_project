import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";



function Dashboard() {
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
        <div className="ps-2">
            <h2>Published Courses (8)</h2> <hr />
            <div className="flex-row flex-wrap">
            <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.description}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
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