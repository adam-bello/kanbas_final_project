import React, { useEffect, useState } from "react";
import { FaBan, FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FaEllipsisVertical, FaRocket } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { KanbasState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client"; 
import axios from "axios";

function Quizzes() {
    const { courseId } = useParams();

    const API_BASE = process.env.REACT_APP_API_BASE;

    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [quiz, setQuiz] = useState({
        _id: "1234",
        name: "New quiz 123 from the default", 
        description: "New Description", 
        points: 25,
        numQuestions: 0,
        startDate: "01-10-2024",
        dueDate: "01-12-2024",
        availableUntil: "01-14-2024",
        published: false,
        assignedTo: "Students",
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes",
        shuffle: true,
        timeLimit: 20,
        multipleAttempts: false,
        showCorrectAnswers: false,
        accessCode: '',
        oneQuestionATime: true,
        webcamRequired: false,
        lockQuestions: false,
        course: "RS101",
    })
    
    const QUIZZES_API = `${API_BASE}/api/courses/${courseId}/quizzes`;
    const QUIZZES_API_2 = `${API_BASE}/api/quizzes`;

    const addNewQuiz = async () => {
        const response = await axios.post(QUIZZES_API, quiz);
        setQuizzes([...quizzes, { ...quiz, _id: response.data._id }]);
    }

    const deleteQuiz = async (quizId: String) => {
        const response = await axios.delete(`${QUIZZES_API_2}/${quizId}`);
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId))
    }

    const updateQuiz = async (quiz:any) => {
        console.log(quiz)
        const response = await axios.put(`${QUIZZES_API_2}/${quiz._id}`, {...quiz, _id: quiz._id, published: !quiz.published});
        setQuizzes(quizzes.map((q) => {
            if (q._id === quiz._id) {
                return {...q, published: !q.published};
            }
            return q;
        }))
    }


    const findAllQuizzes = async () => {
        const response = await axios.get(QUIZZES_API);
        setQuizzes(response.data);
    }

    useEffect(() => {
        findAllQuizzes();
    }, [])
    

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
                        <button type="button" className="btn btn-danger btn-sm"
                            onClick={addNewQuiz}>
                            <IoIosAdd/>Quiz
                        </button>
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
                        {quizzes.map((quiz) => (
                        <li className="list-group-item">
                            <div className="d-flex">
                                <div className="icon-pad buttonEnd2 additionPad">
                                    <FaRocket style={{ color: "green"}}/>
                                </div>
                                <div className="d-flex flex-column flex-fill">
                                    <div>
                                        <b><Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`} className="link-style" style={{color: "black"}}>{quiz.name}</Link></b>
                                    </div>
                                    <div className="d-flex">
                                        <div className="adjustPos">
                                           <a style={{color: "black"}}> {quiz.availability} </a> &nbsp; | &nbsp;
                                           <b>Due</b> {quiz.dueDate} &nbsp; | &nbsp; {quiz.points} pts &nbsp; | &nbsp; {quiz.numQuestions} Questions
                                        </div>
                                    </div>
                                </div>
                                
                                    <span className="float-end icon-pad">
                                        {quiz && quiz.published && quiz._id !== "1234" && (
                                            <span onClick={(event) => {event.preventDefault(); setQuiz(quiz); updateQuiz(quiz)}} >
                                            <span role="img" aria-label="published">
                                                <FaCheckCircle style={{ color: "green"}}/>
                                            </span>
                                            </span>
                                        )}
                                        {quiz && !quiz.published && quiz._id !== "1234" && (
                                            <span onClick={(event) => {event.preventDefault(); setQuiz(quiz); updateQuiz(quiz)}} >
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
                                                <li>
                                                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`} className="link-style" style={{color: "black"}}><a className="dropdown-item">
                                                        <button className="btn ms-2"> Edit </button>
                                                    </a></Link>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item">
                                                        <button className="btn ms-2" onClick={() => deleteQuiz(quiz._id)} > Delete </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item">
                                                        <button className="btn ms-2" onClick={() => updateQuiz(quiz)} >
                                                            {quiz.published ? "Unpublish" : "Publish"}
                                                        </button>
                                                    </a>
                                                </li>
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