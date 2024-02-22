import KanbasNavigation
 from "./Navigation";

import { Routes, Route, Navigate }
 from "react-router-dom";

import Dashboard 
 from "./Dashboard";

import Courses 
 from "./Courses";

import "./index.css";



function Kanbas() {
    return (
        <>
        <div className="d-flex div-check">
            <div className="d-none d-md-block commonDiv" >
                <KanbasNavigation />
            </div>
            <div className="d-flex flex-column flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
        </div>
    </>
    );
}

export default Kanbas;
 