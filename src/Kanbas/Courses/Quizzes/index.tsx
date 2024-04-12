import React, { useState } from "react";
import { FaBan, FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaEllipsisVertical, FaRocket } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

function Quizzes() {
    const [quizzes, setQuizzes] = useState(db.quizzes);

    const { courseId } = useParams();
    const quizList = quizzes.filter(
        (quiz) => quiz.course === courseId);
        
    const togglePublicationStatus = (quizId: string) => {
        setQuizzes((prevQuizzes) =>
        prevQuizzes.map((quiz) =>
            quiz._id === quizId ? { ...quiz, published: !quiz.published } : quiz
        )
        );
    };
    

  return (
    <>

    <div className="flex-fill distNav">

        <div className="d-flex flex-column">

            <div className="d-flex padUpper"> 
                <div className="flex-fill">
                    <div className="inputStyle input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search For Quiz"></input>
                    </div>
                </div>

                <div className="d-flex buttonEnd2">   

                    <div className="padBoth">
                        <button type="button" className="btn btn-danger btn-sm"><IoIosAdd />Quiz</button>
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
                        <FaEllipsisV className="me-2" /> Assignment Quizzes
                        <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {quizList.map((quiz) => (
                        <li className="list-group-item">
                            <div className="d-flex">
                                <div className="icon-pad buttonEnd2 additionPad">
                                    <FaRocket style={{ color: "green"}}/>
                                </div>
                                <div className="d-flex flex-column flex-fill">
                                    <div>
                                        <b><Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`} className="link-style" style={{color: "black"}}>{quiz.title}</Link></b>
                                    </div>
                                    <div className="d-flex">
                                        <div className="adjustPos">
                                           <a style={{color: "black"}}> {quiz.availability} </a> &nbsp; | &nbsp;
                                           <b>Due</b> {quiz.due_date} &nbsp; | &nbsp; {quiz.points} pts &nbsp; | &nbsp; {quiz.numQuestions} Questions
                                        </div>
                                    </div>
                                </div>
                                
                                    <span className="float-end icon-pad">
                                            
                                        {quiz.published ? (
                                            <span onClick={() => togglePublicationStatus(quiz._id)}>
                                            <span role="img" aria-label="published">
                                                <FaCheckCircle/>
                                            </span>
                                            </span>
                                        ) : (
                                            <span onClick={() => togglePublicationStatus(quiz._id)}>
                                            <span role="img" aria-label="unpublished">
                                                <FaBan/>
                                            </span>
                                            </span>
                                        )}
                                        <div className="btn-group left-extra-pad">

                                            <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                                <FaEllipsisVertical/> 
                                            </button>

                                            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
                                                <li><a className="dropdown-item" href="#">Publish</a></li>
                                            </ul>
                                        </div>
                                    </span>
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




export default Quizzes;