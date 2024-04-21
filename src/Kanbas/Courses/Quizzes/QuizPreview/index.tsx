import { Navigate, Route, Routes, useNavigate, useParams } from "react-router";
import Nav from "../Nav";
import * as questionClient from "../QuizEditor/Questions/client";
import * as quizClient from "../client";
import "./index.css";
import { useEffect, useState } from "react";
import { TbExclamationMark } from "react-icons/tb";

import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { CgPen } from "react-icons/cg";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";


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

  const nextQ = async () => {
    setIndex(index+1);

  }

  const fetchQuestions = async (courseId : any, quizId : any) => {
    const response = await questionClient.findQuestionsForQuiz(courseId, quizId);
    setQuestions(response);
    if (response.length > 0) {
      setQuestion(response[index]); 
    }

  };

  useEffect(() => {
    if (questions.length > index) {
      setQuestion(questions[index]); 
    }
  }, [index, questions]);

  const fetchQuiz = async (quizId : any) => {
    const response = await quizClient.findQuizById(quizId);
    setQuizName(response.name);
  }

  useEffect(() => {
    fetchQuiz(quizId);
    fetchQuestions(courseId, quizId);
    console.log(question);
  }, []);

  // useEffect(() => {
  //   setQuestion(questions[index]);
  // }, [index]);
    
    return(
      <>
        <div className="d-flex flex-column">
            <div>
              <h2>
                {quizName}
              </h2>
            </div>
            <div className="warning">
              <FaExclamationCircle />This is a preview of the published version of the quiz
            </div>
            <div className="extra-pad">
              Started at
            </div>
            <div>
              <h2>Quiz Instructions</h2>
            </div>

            <hr />

            <div className="d-flex adjust"> 
                <div className="adjust-Pad">
                  <CiLocationArrow1 />
                </div>
                <div className="d-flex flex-column rect-whole-thing">
                    <div className="d-flex rect-question">
                        <div className="flex-fill pad-left">
                          {question.title}
                        </div>
                        <div className="pad-right">
                          {question.points} pts
                        </div>
                    </div>
                    <div>
                      {question.question}
                    </div>

                      {(question.type === "multiple_choice" || question.type === "true_false") && (
                        <>
                        {question.choices.map((choice) => (
                            <>
                            <hr />
                            <div>
                              <input type="radio" name="quizChoice" id={`${index}`} />
                                {choice}
                            </div>
                          </>
                          ))}
                          </>
                        )}

                      {question.type === "fill_in_the_blanks"  && (
                        <>
                        {question.correct_answers.map((ans, ind) => (
                            <>
                            <hr />
                            <div>
                              {ind}
                              <input 
                                 type="text"
                                 />
                            </div>
                          </>
                          ))}
                          </>
                        )}


                </div>
            </div>

            <div className="buttonEnd down">
                <div className="pad-right-more">
                    <button type="button" className="btn btn-outline-secondary btn-sm" onClick={nextQ}>Next <IoMdArrowDropright /></button>
                </div>
            </div> 


            <div className="rect-final buttonEnd">
                <div className="pad-right-little">
                  Quiz Saved at 
                </div>
                <button type="button" className="btn btn-outline-secondary btn-sm">
                  Submit Quiz
                </button>
            </div>

            <div className="top">
              <div className="rect-editting">
                  <CgPen/> Keep Editing This Quiz
              </div>
            </div>

            <h4>Questions</h4>
            {questions.map((question, idx) => (
                <>
                <button className="btn btn-light" onClick={() => setIndex(idx)}>
                  <HiOutlineQuestionMarkCircle />Question {idx}
                </button>
                </>
                          ))}



 
        </div>
      </>
    )
}

export default QuizPreview;