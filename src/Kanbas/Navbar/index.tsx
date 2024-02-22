import React from "react";

import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { RiSoundModuleLine } from "react-icons/ri";
import { CgPlug } from "react-icons/cg";
import { FaFileSignature } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { FaClipboard } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCog } from "react-icons/fa";


import { FaHome } from "react-icons/fa";
import "./index.css";

import { Link } from "react-router-dom";


function Navbar() {
    var pageNumber = new String(window.location.href);
    var wherePage = pageNumber.substring(pageNumber.lastIndexOf("/") + 1);
    var updatePage = wherePage.replace(/%20/g, " ");

    //const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcement", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];

    //const icons = [FaHome, RiSoundModuleLine, CgPlug, CgPlug, FaFileSignature, IoIosRocket, FaBook, FaUserGroup, CgPlug, GoCommentDiscussion, FaBullhorn, FiFileText, CiFileOn, FaClipboard, FaBullseye, FaRegCircle, FaBook, FaCog];

    return (
        <div className="d-block d-md-none botPad">
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-toggler" type="button" 
                   data-bs-toggle="collapse" 
                   href="#collapseID" 
                   role="option" 
                   aria-controls="collapseID" 
                   aria-expanded="false">
                    
                    <span className="navbar-toggler-icon"></span>
                </a>
               
                <a className="navbar-brand" href="#">{ updatePage }</a>
                
                <div> 
                    <a className="navbar-toggler" type="button"><FaGlasses /></a>
                    <a className="navbar-toggler" type="button" 
                                                data-bs-toggle="collapse" 
                                                href="#collapseID" 
                                                role="option" 
                                                aria-controls="collapseID" 
                                                aria-expanded="false">
                    <FaAngleDown className="angleDown" />
                    <FaTimes className="angleTimes" />
                    </a>
                </div>
                
            </div>
            </nav>

            <div className="collapse" id="collapseID">
                <div className="d-flex flex-column w-100 colorWhite">
                    <a className="settings-link"><FaHome /><Link className="set-color" to="Home">Home</Link></a>
                    <a className="settings-link"><RiSoundModuleLine /><Link className="set-color" to="Modules">Modules</Link></a>
                    <a className="settings-link"><CgPlug /><Link className="set-color" to="Piazza">Piazza</Link></a>
                    <a className="settings-link"><CgPlug /><Link className="set-color" to="Zoom Meetings">Zoom Meetings</Link></a>
                    <a className="settings-link"><FaFileSignature /><Link className="set-color" to="Assignments">Assignments</Link></a>
                    <a className="settings-link"><IoIosRocket/><Link className="set-color" to="Quizzes">Quizzes</Link></a>
                    <a className="settings-link"><FaBook/><Link className="set-color" to="Grades">Grades</Link></a>
                    <a className="settings-link"><FaUserGroup/><Link className="set-color" to="People">People</Link></a>
                    <a className="settings-link"><CgPlug /><Link className="set-color" to="Panopto Video">Panopto Video</Link></a>
                    <a className="settings-link"><GoCommentDiscussion/><Link className="set-color" to="Discussions">Discussions</Link></a>
                    <a className="settings-link"><FaBullhorn/><Link className="set-color" to="Announcement">Announcement</Link></a>
                    <a className="settings-link"><FiFileText/><Link className="set-color" to="Pages">Pages</Link></a>
                    <a className="settings-link"><CiFileOn/><Link className="set-color" to="Files">Files</Link></a>
                    <a className="settings-link"><FaClipboard/><Link className="set-color" to="Rubrics">Rubrics</Link></a>
                    <a className="settings-link"><FaBullseye/><Link className="set-color" to="Outcomes">Outcomes</Link></a>
                    <a className="settings-link"><FaRegCircle/><Link className="set-color" to="Collaborations">Collaborations</Link></a>
                    <a className="settings-link"><FaBook/><Link className="set-color" to="Syllabus">Syllabus</Link></a>
                    <a className="settings-link"><FaCog/><Link className="set-color" to="Settings">Settings</Link></a>

                
                        {/* {links.map((link, index) => (
                            <a key={index} className="settings-link">
                            <Link to={link}>{link}</Link>
                            </a>
                        ))} */}
                    

                </div>
            </div>
        </div> 
  );
}

export default Navbar;