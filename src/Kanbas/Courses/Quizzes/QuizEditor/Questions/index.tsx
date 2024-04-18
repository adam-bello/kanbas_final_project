import { CgAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import * as client from "./client";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


function Questions() {
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

  const findQuestionsForQuiz = async () => {
    const questionsResponse = await client.findQuestionsForQuiz(courseId, quizId);
    setQuestions(questionsResponse);
  }

  const addNewQuestion = async () => {
    const response = await client.createQuestion(courseId, quizId, question);
    setQuestions([...questions, { ...question, _id: response._id }]);
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
                <button type="button" className="btn btn-light"> Cancel </button> 
            </div>
            <div>
                <button type="button" className="btn btn-light"> Save & Publish </button> 
            </div>
            <div>
                <button type="button" className="btn btn-danger"> Save </button> 
            </div>
        </div>
        </>
    )
}

export default Questions;