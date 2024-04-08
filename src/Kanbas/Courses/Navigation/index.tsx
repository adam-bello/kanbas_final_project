import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcement", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();

    return (
        <ul className="wd-navigation">
        {links.map((link, index) => (
            <li key={index} className={pathname.includes(link) || ( pathname.includes("Zoom") && link.includes("Zoom") ) || ( pathname.includes("Video") && link.includes("Video") ) ? "wd-active" : ""}>
            <Link to={link}>{link}</Link>
            </li>
        ))}
        </ul>
    );
}
export default CourseNavigation;

