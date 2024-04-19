import { Link, useLocation, useParams } from "react-router-dom";
import React from "react";

function Nav() {
  const { pathname } = useLocation();

  var { courseId, quizId } = useParams();
  
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizEditor/Details`}
            className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}>Details</Link>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizEditor/Questions`}
            className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}>Questions</Link>
    </nav>
);}

export default Nav;