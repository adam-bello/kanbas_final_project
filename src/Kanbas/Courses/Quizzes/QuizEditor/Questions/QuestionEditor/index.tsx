import React, { useState, useEffect } from "react";
import { BsArrowLeftRight, BsArrowsAngleExpand, BsKeyboard, BsPenFill } from "react-icons/bs";
import { CiText } from "react-icons/ci";
import { FaBold, FaEllo, FaItalic, FaRainbow, FaUnderline } from "react-icons/fa";
import { FaEllipsis, FaEllipsisVertical } from "react-icons/fa6";
import { PiTextAUnderline } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { CgAdd, CgCodeSlash } from "react-icons/cg";
import { Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import * as client from "../client";

function QuestionEditor() {
    const navigate = useNavigate()
    const { questionId } = useParams();
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
      quiz: ""
    });

    const fetchQuestion = async (questionId : any) => {
      const question = await client.findQuestionById(questionId);
      setQuestion(question);
    }

    const handleQuestionTypeChange = (newType : any) => {
      if (newType === "true_false") {
        setQuestion({...question, type: newType, choices: ["true", "false"], correct_answers: []});
      }
      else {
        setQuestion({...question, type: newType, choices: [], correct_answers: []});
      }
    }

    useEffect(() => {
      fetchQuestion(questionId);
    }, []);

    return(
        <>
        <div className="flex-fill">
            {question.type === "multiple_choice" && (
              <div className="flex-fill">
              <div className="d-flex flex-column">
                  <div className="d-flex">
                      <div>
                          <input type="text" className="form-control" placeholder="enter a question title" value={question.title}></input>
                      </div>
                      <div>
                        <select className="form-control" value={question.type} onChange={(e) => handleQuestionTypeChange(e.target.value)}>
                          <option value="multiple_choice">Multiple Choice</option>
                          <option value="true_false">True False</option>
                          <option value="fill_in_the_blanks">Fill in the Blanks</option>
                        </select>
                      </div>
                      <div className="flex-fill">
                      </div>
                      <div className="d-flex">
                          Points <input type="number" className="form-control" value={question.points}></input>
                      </div>
                  </div>
                  <hr></hr>
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
                value={question.question} >   
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
                              <button type="button" className="btn btn-light"> Cancel </button> 
                          </div>
                          <div>
                              <button type="button" className="btn btn-danger"> Update Question </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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