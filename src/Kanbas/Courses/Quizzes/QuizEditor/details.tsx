import { BsArrowLeftRight, BsArrowsAngleExpand, BsKeyboard, BsPenFill } from "react-icons/bs";
import { CiText } from "react-icons/ci";
import { FaBold, FaEllo, FaItalic, FaRainbow, FaUnderline } from "react-icons/fa";
import { FaEllipsis, FaEllipsisVertical } from "react-icons/fa6";
import { PiTextAUnderline } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { CgAdd, CgCodeSlash } from "react-icons/cg";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import React from "react";
import { Link } from "react-router-dom";

function Details() {
    // <input value={course.name} className="form-control"
    //          onChange={(e) => setQuiz({ ...quiz, name: e.target.value }) } />

    const API_BASE = process.env.REACT_APP_API_BASE;

    const navigate = useNavigate();

    const publishAndSave = async () => {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
    }

    var { courseId, quizId } = useParams();

    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [quiz, setQuiz] = useState({
        _id: "1234",
        name: "New quiz 123", 
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
        course: "RS101"
    })
    
    const QUIZZES_API = `${API_BASE}/api/quizzes/${quizId}`;
    const QUIZZES_API_2 = `${API_BASE}/api/quizzes`;

    const updateQuiz = async () => {
        const response = await axios.put(
            `${QUIZZES_API_2}/${quiz._id}`,
          quiz
        );
        setQuizzes(
          quizzes.map((q) => {
            if (q._id === quiz._id) {
              return quiz;
            } else {
              return q;
            }
          })
        );
      };

      const updateQuizPublished = async (quiz:any) => {
        if (quiz.published) {
            return;
        }
        const response = await axios.put(`${QUIZZES_API_2}/${quiz._id}`, {...quiz, _id: quiz._id, published: !quiz.published});
        setQuizzes(quizzes.map((q) => {
            if (q._id === quiz._id) {
                return {...q, published: !q.published};
            }
            return q;
        }))
    }

    const findQuiz = async () => {
        const response = await axios.get(QUIZZES_API);
        setQuiz(response.data);
    }

    useEffect(() => {
        findQuiz();
    }, [])

    return(
        <>

        <input 
            type="text" 
            className="form-control" 
            placeholder="enter a quiz name" 
            value={quiz.name} 
            onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}>
        </input>

        <h3>Quiz Instructions</h3>

        
        <div className="d-flex">
            <div>
                <button type="button" className="btn btn-light"> Edit </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> View </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> Insert </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> Format </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> Tools </button> 
            </div>
            <div className="flex-fill">
                <button type="button" className="btn btn-light"> Table </button> 
            </div>
            <div>
                <FaRainbow style={{color:"green"}}/> 100%
            </div>
        </div>

        <div className="d-flex">
            <div>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    12 pt  
                </button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    Paragraph
                </button>
                &nbsp; <RxDividerVertical/> &nbsp;
            </div>
            <div>
                <button type="button" className="btn btn-light"> <FaBold/> </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> <FaItalic/> </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> <FaUnderline/> </button> 
            </div>
            <div>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    <PiTextAUnderline/>  
                </button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    <BsPenFill/>  
                </button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle btn-sm" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                    <CiText/>  
                </button>
                &nbsp; <RxDividerVertical/> &nbsp;
            </div>
            <div>   
                <button type="button" className="btn btn-light"> <FaEllipsisVertical/> </button> 
            </div>
        </div>
        
        <div>
            <textarea 
                className="full-width-input bigger-height" 
                placeholder="Enter a new Description" 
                value={quiz.description} 
                onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}>   
            </textarea>
        </div>

        <div className="d-flex">
            <div className="flex-fill">
                p
            </div>
            <div>
                <button type="button" style={{color:"red"}} className="btn btn-light"> <BsKeyboard/> </button> 
                &nbsp; <RxDividerVertical/> &nbsp;
            </div>
            <div>
                <button type="button" style={{color:"red"}} className="btn btn-light"> 0 Words </button> 
                &nbsp; <RxDividerVertical/> &nbsp;
            </div>
            <div>
                <button type="button" style={{color:"red"}} className="btn btn-light"> <CgCodeSlash/> </button> 
            </div>
            <div>
                <button type="button" style={{color:"red"}} className="btn btn-light"> <BsArrowsAngleExpand/> </button> 
            </div>
            <div>
                <button type="button" style={{color:"gray"}} className="btn btn-light"> <FaEllipsisVertical/><FaEllipsisVertical/> </button> 
            </div>
        </div>

        <div>
            <div className="d-flex">
                <div>
                    Quiz Type : &nbsp;
                </div>
                <div>
                { quiz.quizType === 'Graded Quiz' ? 
                    <select onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}>
                        <option selected>Graded Quiz</option>
                        <option>Practice Quiz</option>
                        <option>Graded Survey</option>
                        <option>Ungraded Survey</option>
                    </select>
                :
                quiz.quizType === 'Practice Quiz' ?
                    <select onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}>
                        <option>Graded Quiz</option>
                        <option selected>Practice Quiz</option>
                        <option>Graded Survey</option>
                        <option>Ungraded Survey</option>
                    </select>
                :
                quiz.quizType === 'Graded Survey' ?
                    <select onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}>
                        <option>Graded Quiz</option>
                        <option>Practice Quiz</option>
                        <option selected>Graded Survey</option>
                        <option>Ungraded Survey</option>
                    </select>
                :
                    <select onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}>
                        <option>Graded Quiz</option>
                        <option >Practice Quiz</option>
                        <option>Graded Survey</option>
                        <option selected>Ungraded Survey</option>
                    </select>
                }   
                </div>
            </div>
        </div>
        <div>
            Points: 
            <input 
                type="number" 
                placeholder="enter num points" 
                value={quiz.points} 
                onChange={(e) => setQuiz({ ...quiz, points: parseInt(e.target.value) })}>
            </input>
        </div>

        <div>
            <div className="d-flex">
                <div>
                    Assignment Group : &nbsp;
                </div>
                <div>
                { quiz.assignmentGroup === 'Quizzes' ? 
                    <select onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                        <option selected>Quizzes</option>
                        <option>Exams</option>
                        <option>Assignments</option>
                        <option>Project</option>
                    </select>
                :
                quiz.assignmentGroup === 'Exams' ?
                    <select onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                        <option>Quizzes</option>
                        <option selected>Exams</option>
                        <option>Assignments</option>
                        <option>Project</option>
                    </select>
                :
                quiz.assignmentGroup === 'Assignments' ?
                    <select onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                        <option>Quizzes</option>
                        <option>Exams</option>
                        <option selected>Assignments</option>
                        <option>Project</option>
                    </select>
                :
                    <select onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                        <option>Quizzes</option>
                        <option>Exams</option>
                        <option>Assignments</option>
                        <option selected>Project</option>
                    </select>
                }
                </div>
            </div>
        </div>

        <div>
            Options
        </div>
        <div>
            <label>
                <input checked={quiz.shuffle} type="checkbox" onChange={(e) => setQuiz({ ...quiz, shuffle: e.target.checked })}/> Shuffle Answers
            </label>
        </div>
        <div className="d-flex">
            <div>
                Time Limit: 
                <input 
                type="number" 
                placeholder="enter a time limit" 
                value={quiz.timeLimit}
                onChange={(e) => setQuiz({ ...quiz, timeLimit: parseInt(e.target.value) })}>
                </input> Minutes
            </div>
        </div>
        <div>
            <label>
                <input checked={quiz.multipleAttempts} type="checkbox" onChange={(e) => setQuiz({ ...quiz, multipleAttempts: e.target.checked })}/> Allow Multiple Attempts
            </label>
        </div>
        <div>
            <label>
                <input checked={quiz.showCorrectAnswers} type="checkbox" onChange={(e) => setQuiz({ ...quiz, showCorrectAnswers: e.target.checked })}/> Show Correct Answers
            </label>
        </div>
        <div>
            Access Code: 
            <input 
                type="text" 
                placeholder="enter access code" 
                value={quiz.accessCode} 
                onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}>
            </input>
        </div>
        <div>
            <label>
                <input checked={quiz.oneQuestionATime} type="checkbox" onChange={(e) => setQuiz({ ...quiz, oneQuestionATime: e.target.checked })}/> One Question At a Time
            </label>
        </div>
        <div>
            <label>
                <input checked={quiz.webcamRequired} type="checkbox" onChange={(e) => setQuiz({ ...quiz, webcamRequired: e.target.checked })}/> Webcam Required
            </label>
        </div>
        <div>
            <label>
                <input checked={quiz.lockQuestions} type="checkbox" onChange={(e) => setQuiz({ ...quiz, lockQuestions: e.target.checked })}/> Lock Questions After Answering
            </label>
        </div>
        <div>
            <div className="d-flex">
                <div>
                    Assign &nbsp;
                </div>
                <div className="flex-column">
                    <div>
                        Assign To
                    </div>
                    <div>
                        <input type="text" placeholder="Everyone"></input>  
                    </div>
                    <div>
                        Due
                    </div>
                    <div>
                        <input type="text" value={quiz.dueDate}/>
                    </div>
                    <div className="d-flex">
                        <div>
                            <label>
                                Available from <br></br> <input type="date"/> 
                            </label>
                        </div>
                        <div>
                            <label>
                                Until <br></br> <input type="date"/> 
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary fullWidth"> <CgAdd/> Add </button>
                    </div>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className="d-flex">
            <div className="flex-fill">
                <label>
                    <input checked={false} type="checkbox"/> Notify users this quiz has changed
                </label>
            </div>
            <div>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="link-style" style={{color: "black"}}>
                    <button type="button" className="btn btn-light"> Cancel </button> 
                </Link>
            </div>
            <div>
                <button type="button" className="btn btn-light" onClick={(event) => {event.preventDefault(); setQuiz(quiz); updateQuiz(); updateQuizPublished(quiz); publishAndSave();}}> Save & Publish </button>
            </div>
            <div>
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`} className="link-style" style={{color: "black"}}>
                    <button type="button" className="btn btn-danger" onClick={updateQuiz}> Save </button> 
                </Link>
            </div>
        </div>
        </>
    )
}

export default Details;