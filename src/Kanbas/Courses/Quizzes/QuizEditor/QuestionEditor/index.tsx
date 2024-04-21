import React, { useState } from "react";
import MultipleChoice from "./multiplechoice";
import TrueFalse from "./truefalse";
import FillBlank from "./fillblank";
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";

function QuestionEditor() {

    const navigate = useNavigate()

    const { questionType } = useParams();

    const [selectedQuestionType, setSelectedQuestionType] = useState(questionType || '');

    const handleQuestionTypeChange = (e:any) => {
        const selectedType = e.target.value;
        setSelectedQuestionType(selectedType);
        if (selectedType) navigate(selectedType)
    };

    return(
        <>
        <div className="flex-fill">
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <div>
                        <input type="text" className="form-control" placeholder="enter a question title" value="Question Title"></input>
                    </div>
                    <div className="d-flex flex-fill">
                        <select value={selectedQuestionType} onChange={handleQuestionTypeChange}>
                            <option value="/Kanbas/Courses/RS101/Quizzes/Q101/QuizEditor/Questions/QQ1/QuestionEditor/MultipleChoice">Multiple Choice</option>
                            <option value="/Kanbas/Courses/RS101/Quizzes/Q101/QuizEditor/Questions/QQ1/QuestionEditor/TrueFalse">True/False</option>
                            <option value="/Kanbas/Courses/RS101/Quizzes/Q101/QuizEditor/Questions/QQ1/QuestionEditor/FillBlank">Fill in the Blank</option>
                        </select>
                    </div>
                    <div>
                        pts <input type="number"></input>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="MultipleChoice"/>}/>
                        <Route path="MultipleChoice" element={<MultipleChoice/>}/>
                        <Route path="TrueFalse" element={<TrueFalse/>}/>
                        <Route path="FillBlank" element={<FillBlank/>}/>
                    </Routes>
                </div>
                <div>
                    <div className="d-flex">
                        <div>
                            <button type="button" className="btn btn-light"> Cancel </button> 
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger"> Update Question </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default QuestionEditor;