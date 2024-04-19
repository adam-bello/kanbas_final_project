import { Navigate, Route, Routes, useNavigate, useParams } from "react-router";
import Nav from "../Nav";
import * as questionClient from "../QuizEditor/Questions/client";
import * as quizClient from "../client";
import "./index.css";
import { useEffect, useState } from "react";



function QuizPreview() {
  const navigate = useNavigate();
  const { courseId, quizId } = useParams();
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState<{
    _id: string;
    title: string;
    points: number;
    question: string;
    type: string;
    choices: string[];
    correct_answers: string[];
    quiz: string;
  }>({
    _id: "",
    title: "",
    points: 0,
    question: "",
    type: "",
    choices: [],
    correct_answers: [],
    quiz: "",
  });

  const fetchQuestions = async (courseId : any, quizId : any) => {
    const response = await questionClient.findQuestionsForQuiz(courseId, quizId);
    await setQuestions(response);
    await setQuestion(response[index]);
  };

  const fetchQuiz = async (quizId : any) => {
    const response = await quizClient.findQuizById(quizId);
    setQuizName(response.name);
  }

  useEffect(() => {
    fetchQuiz(quizId);
    fetchQuestions(courseId, quizId);
    console.log(question);
  }, []);
    
    return(
      <>
        <div>
          <h1>
            {quizName}
          </h1>
          <h3>
            This is a preview of the published version of the quiz
          </h3>
          <hr />
          <div className="d-flex">
            <div>
              {question.title}
            </div>
            <span className="float-end">
              {question.points} pts
            </span>
          </div>
        </div>
      </>
    )
}

export default QuizPreview;