import { BsArrowLeftRight, BsArrowsAngleExpand, BsKeyboard, BsPenFill } from "react-icons/bs";
import { CiText } from "react-icons/ci";
import { FaBold, FaEllo, FaItalic, FaRainbow, FaUnderline } from "react-icons/fa";
import { FaEllipsis, FaEllipsisVertical } from "react-icons/fa6";
import { PiTextAUnderline } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { CgAdd, CgCodeSlash } from "react-icons/cg";

function Details() {

    return(
        <>

        <input type="text" className="form-control" placeholder="enter a quiz name" value="current quiz name"></input>

        <h3>Quiz Instructions</h3>

        
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
            <textarea className="full-width-input bigger-height" placeholder="New Description"></textarea>
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
                    Quiz Type : &nbsp;
                </div>
                <div>
                    <select>
                        <option>Graded Quiz</option>
                        <option>Practice Quiz</option>
                        <option>Graded Survey</option>
                        <option>Ungraded Survey</option>
                    </select>
                </div>
            </div>
        </div>

        <div>
            <div className="d-flex">
                <div>
                    Assignment Group : &nbsp;
                </div>
                <div>
                    <select>
                        <option>Quizzes</option>
                        <option>Exams</option>
                        <option>Assignments</option>
                        <option>Project</option>
                    </select>
                </div>
            </div>
        </div>

        <div>
            Options
        </div>
        <div>
            <label>
                <input checked={true} type="checkbox"/> Shuffle Answers
            </label>
        </div>
        <div className="d-flex">
            <div>
                <label>
                    <input checked={true} type="checkbox"/> Time Limit
                </label>
                &nbsp; &nbsp;
            </div>
            <div>
                <input type="number" placeholder="enter a time limit" defaultValue="20"></input> Minutes
            </div>
        </div>
        <div>
            <label>
                <input checked={false} type="checkbox"/> Allow Multiple Attempts
            </label>
        </div>
        <div>
            <div className="d-flex">
                <div>
                    Assign &nbsp;
                </div>
                <div className="flex-column">
                    <div>
                        Assign To
                    </div>
                    <div>
                        <input type="text" placeholder="Everyone"></input>  
                    </div>
                    <div>
                        Due
                    </div>
                    <div>
                        <input type="date"/>
                    </div>
                    <div className="d-flex">
                        <div>
                            <label>
                                Available from <br></br> <input type="date"/> 
                            </label>
                        </div>
                        <div>
                            <label>
                                Until <br></br> <input type="date"/> 
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary fullWidth"> <CgAdd/> Add </button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Details;