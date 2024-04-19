import React, { useEffect, useState } from "react";
import "./index.css";
import { CiCircleCheck } from "react-icons/ci";
import { FaEllipsisVertical, FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { KanbasState } from "../../store";
import axios from "axios";
import { useParams } from "react-router";
import { FaBan } from "react-icons/fa";
import { Link } from "react-router-dom";

function QuizDetails() {

    const API_BASE = process.env.REACT_APP_API_BASE;

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

    const updateQuiz = async (quiz:any) => {
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
    {console.log(quiz)}
    <div className="flex-fill distNav">
        <div className="d-flex flex-column spaceTop">

            <div className="buttonEnd">
                <div>
                    
                    {quiz.published ?  
                    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {updateQuiz(quiz) ; quiz.published = !quiz.published}}><FaBan style={{ color: "red" }}/> Unpublish </button>
                    :  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {updateQuiz(quiz) ; quiz.published = !quiz.published}}><CiCircleCheck style={{ color: "green" }}/> Publish </button>}
                </div>
                <div className="padBoth">
                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizPreview`} className="link-style" style={{color: "black"}}>
                        <button type="button" className="btn btn-outline-secondary btn-sm">Preview</button>
                    </Link>
                </div>
                <div className="padBoth">
                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizEditor/Details`} className="link-style" style={{color: "black"}}>
                        <button type="button" className="btn btn-outline-secondary btn-sm"><FaPencil/>Edit</button>
                    </Link>
                </div>
                
                <button type="button" className="btn btn-outline-secondary btn-sm"><FaEllipsisVertical/></button>

            </div>  

            <div className="spacing">
                <hr></hr>

                <h1>Quiz Title - {quiz.name}</h1>

                <div className="d-flex">
                    <div className="align">
                        <h6>Quiz Type</h6>
                        <h6>Points </h6>
                        <h6>Assignment Group</h6>
                        <h6>Shuffle Answers </h6>
                        <h6>Time Limit</h6>
                        <h6>Multiple Attempts </h6>
                        <h6>Show Correct Answers </h6>
                        <h6>Access Code </h6>
                        <h6>One Question At A Time </h6>
                        <h6>Webcam Required </h6>
                        <h6>Lock Questions After Answering </h6>
                    </div>
                    <div className="left-extra-pad">
                        <h6>{quiz.quizType}</h6>
                        <h6>{quiz.points}</h6>
                        <h6>{quiz.assignmentGroup}</h6>
                        <h6>{quiz.shuffle ? "Yes" : "No"}</h6>
                        <h6>{quiz.timeLimit}</h6>
                        <h6>{quiz.multipleAttempts ? "Yes" : "No"}</h6>
                        <h6>{quiz.showCorrectAnswers ? "Yes" : "No"}</h6>
                        <h6>{quiz.accessCode ? quiz.accessCode : "None"}</h6>
                        <h6>{quiz.oneQuestionATime ? "Yes" : "No"}</h6>
                        <h6>{quiz.webcamRequired ? "Yes" : "No"}</h6>
                        <h6>{quiz.lockQuestions ? "Yes" : "No"}</h6>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Due</th>
                            <th>For</th>
                            <th>Available From</th>
                            <th>Until</th>
                        </tr>

                        <tr>
                            <td>{quiz.dueDate}</td>
                            <td>{quiz.assignedTo}</td>
                            <td>{quiz.startDate}</td>
                            <td>{quiz.availableUntil}</td>
                        </tr>

                    </thead>
                </table>
            </div>
        </div>
    </div>
    </>
    );

}

export default QuizDetails;