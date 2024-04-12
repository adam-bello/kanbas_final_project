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
        </>
    )
}

export default Questions;