import React, { useState } from "react";
import db from "../../Database";
import "./index.css";
import { CiCircleCheck } from "react-icons/ci";
import { FaEllipsisVertical, FaPencil } from "react-icons/fa6";

function QuizDetails() {


    return(

    <>
    <div className="flex-fill distNav">
        <div className="d-flex flex-column spaceTop">

            <div className="buttonEnd">
                <div>
                    <button type="button" className="btn btn-outline-secondary btn-sm"><CiCircleCheck style={{ color: "green" }}/> Published </button>
                </div>
                <div className="padBoth">
                    <button type="button" className="btn btn-outline-secondary btn-sm">Preview</button>
                </div>
                <div className="padBoth">
                    <button type="button" className="btn btn-outline-secondary btn-sm"><FaPencil/>Edit</button>
                </div>
                
                <button type="button" className="btn btn-outline-secondary btn-sm"><FaEllipsisVertical/></button>

            </div>  

            <div className="spacing">
                <hr></hr>

                <h1>Quiz Title</h1>

                <h6>Quiz Type</h6>
                <h6>Points</h6>
                <h6>Assignment Group</h6>
                <h6>Shuffle Answers</h6>
                <h6>Time Limit</h6>
                <h6>Multiple Attempts</h6>
                <h6>View Responses</h6>
                <h6>Show Correct Answers</h6>
                <h6>One Question At A Time</h6>
                <h6>Require Respondus Lockdown Browser</h6>
                <h6>Required To View Quiz Results</h6>
                <h6>Webcam Required</h6>
                <h6>Lock Questions After Answering</h6>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Due</th>
                            <th>For</th>
                            <th>Available From</th>
                            <th>Until</th>
                        </tr>

                        <tr>
                            <td>Due at</td>
                            <td>Everyone</td>
                            <td>Available From at</td>
                            <td>Until at</td>
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