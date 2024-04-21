import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav";
import Details from "./details";
import Questions from "./Questions";
import "./index.css";
import { FaEllipsisVertical } from "react-icons/fa6";

import React from "react";


function QuizEditor() {

    
    return(
        <>
        <div className="flex-fill">
            <div className="d-flex flex-column">
                <div className="buttonEnd">
                    <div>
                        Points 0
                    </div>
                    <div className="left-extra-pad">
                        Not Published
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