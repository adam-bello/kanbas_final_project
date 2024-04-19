import { Navigate, Route, Routes, useParams } from "react-router";
import Nav from "../Nav";
import Details from "./details";
import Questions from "./Questions";
import "./index.css";
import { FaBan, FaEllipsisVertical } from "react-icons/fa6";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiCircleCheck } from "react-icons/ci";



function QuizEditor() {

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
        <div className="flex-fill">
            <div className="d-flex flex-column">
                <div className="buttonEnd">
                    <div>
                        Points &nbsp; {quiz.points}
                    </div>
                    <div className="left-extra-pad">
                    {quiz.published ?  
                    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {updateQuiz(quiz) ; quiz.published = !quiz.published}}><FaBan style={{ color: "red" }}/> Unpublish </button>
                    :  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => {updateQuiz(quiz) ; quiz.published = !quiz.published}}><CiCircleCheck style={{ color: "green" }}/> Publish </button>}
                    </div>
                    <div className="left-extra-pad ">
                        <button type="button" className="btn btn-outline-secondary btn-sm"><FaEllipsisVertical /></button>
                    </div>
                </div>
                <div className="container-fluid">

                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Details/>}/>
                        <Route path="Details"
                        element={<Details/>}/> 
                        <Route path="Questions"
                        element={<Questions/>}/>
                    </Routes>

                </div>
                <hr></hr>
            </div>
        </div>
       
      </>
    )
}

export default QuizEditor;