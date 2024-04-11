import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/Kanbas/Courses/RS101/Quizzes/Q101/QuizEditor/Details"
            className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}>Details</Link>
      <Link to="/Kanbas/Courses/RS101/Quizzes/Q101/QuizEditor/Questions"
            className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}>Questions</Link>
    </nav>
);}

export default Nav;