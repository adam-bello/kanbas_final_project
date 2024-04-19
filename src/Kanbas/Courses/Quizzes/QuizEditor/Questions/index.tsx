import { CgAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import * as client from "./client";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import React from "react";
import axios from "axios";


function Questions() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const navigate = useNavigate()
  const { courseId, quizId } = useParams();
  const [questions, setQuestions] = useState<any[]>([]);
  const [question, SetQuestion] = useState({
    _id: "123",
    title: "New Question",
    points: 4,
    question: "???",
    type: "multiple_choice",
    choices: [],
    correct_answers: [],
    quiz: quizId
  });

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
  const publishAndSave = async () => {
      navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
  }

  const findQuestionsForQuiz = async () => {
    const questionsResponse = await client.findQuestionsForQuiz(courseId, quizId);
    setQuestions(questionsResponse);
  }

  const addNewQuestion = async () => {
    const response = await client.createQuestion(courseId, quizId, question);
    setQuestions([...questions, { ...question, _id: response._id }]);
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizEditor/Questions/${response._id}/QuestionEditor`);
  }

  const deleteQuestion = async (questionId : any) => {
    await client.deleteQuestion(questionId);
    setQuestions(questions.filter((question) => question._id !== questionId));
  }

  const handleEditQuestion = (questionId : any) => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizEditor/Questions/${questionId}/QuestionEditor`);
  }

  useEffect(() => {
      findQuestionsForQuiz();
  }, [])

  const findQuiz = async () => {
    const response = await axios.get(QUIZZES_API);
    setQuiz(response.data);
  }

  useEffect(() => {
      findQuiz();
  }, [])
    return (
        <>
        
        <div className="d-flex">
            <div>
                <button type="button" className="btn btn-light" onClick={addNewQuestion}> <CgAdd/> New Question </button>
            </div>
            <div>
                <button type="button" className="btn btn-light"> <CgAdd/> New Question Group </button>
            </div>
            <div>
                <button type="button" className="btn btn-light"> <CiSearch/> Find Questions </button>
            </div>
        </div>
        
        <hr></hr>

        <ul className="list-group">
          {questions.map((question) => (
          <li className="list-group-item">
            {question.title}
            <span className="float-end icon-pad">
              <button type="button" className="btn btn-primary" onClick={() => handleEditQuestion(question._id)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => deleteQuestion(question._id)}>Delete</button>
            </span>
          </li>))}
        </ul>
        
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

export default Questions;