import { CgAdd } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";


function Questions() {
    return (
        <>
        
        <div className="d-flex">
            <div>
                <button type="button" className="btn btn-light"> <CgAdd/> New Question </button>
            </div>
            <div>
                <button type="button" className="btn btn-light"> <CgAdd/> New Question Group </button>
            </div>
            <div>
                <button type="button" className="btn btn-light"> <CiSearch/> Find Questions </button>
            </div>
        </div>
        
        <hr></hr>
        
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