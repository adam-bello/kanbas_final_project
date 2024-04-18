import React, { useState, useEffect } from "react";
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import * as client from "../client";

function QuestionEditor() {
    const navigate = useNavigate()
    const { questionId } = useParams();
    const [question, setQuestion] = useState({
      _id: "",
      title: "",
      points: 0,
      question: "",
      type: "",
      choices: [],
      correct_answers: [],
      quiz: ""
    });

    const fetchQuestion = async (questionId : any) => {
      const question = await client.findQuestionById(questionId);
      setQuestion(question);
    }

    useEffect(() => {
      fetchQuestion(questionId);
    }, []);

    return(
        <>
        <div className="flex-fill">
            {question.type === "multiple_choice" && (
              <div>Multiple Choice</div>
            )}
            {question.type === "true_false" && (
              <div>True False</div>
            )}
            {question.type === "fill_in_the_blanks" && (
              <div>Fill in the Blanks</div>
            )}
        </div>
        </>
    );
}


export default QuestionEditor;