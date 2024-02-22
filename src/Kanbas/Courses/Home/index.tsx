import ModuleList from "../Modules/List";
import "./index.css";

import { IoBanOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { RiFileUploadLine } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa6";
import { MdOutlineBarChart } from "react-icons/md";
import { CiBullhorn } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

function Home() {
  return (
    <>
    <div className="flex-fill"> 
        <div className="d-flex flex-column padTop">
            <ModuleList />
        </div>
    </div>

    <div className="flex-grow-0 me-2 d-none d-lg-block statusBlock">
        <h4>Course Status</h4>
        <div className="d-flex">
            <div>
                <button type="button" className="btn btn-outline-secondary btn-sm"><IoBanOutline />Unpublish</button>
                <button type="button" className="btn btn-success btn-sm"><CiCircleCheck />Published</button>
            </div>
        </div>
        <div className="padTopSecond">
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><RiFileUploadLine />Import Existing Content</button></a>
            </div>
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><RiFileUploadLine />Import From Commons</button></a>
            </div>
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><FaBullseye />Choose Home Page</button></a>
            </div>
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><MdOutlineBarChart />View Course Stream</button></a>
            </div>
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><CiBullhorn />New Announcement</button></a>
            </div>
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><MdOutlineBarChart />New Analytics</button></a>
            </div>
            <div className="padTopThird">
                <a href= "#"><button className="button-rules" type="button"><CiBellOn />View Course Notifications</button></a>
            </div>
        </div>

        <div className="toDoStyle"> 
            <h5 className="alignLeft">To Do </h5>
            <hr></hr>
            <div className="d-flex">
            <FaCircle className="circleStyle"/>
                <div className="d-flex flex-column alignLeft">
                    <div>
                        <a href="#" className="linkDecor">Grade A1 - ENV + HTML</a>
                    </div>
                    <div className="textAdjust">
                        100 points • Sep 18 at 11:59pm 
                    </div>
                </div>  
                
                <FaTimes />
            </div>
        </div>

        <div className="d-flex padTop2">
            <div className="flex-fill">
                <h5 className="alignLeft">Coming Up</h5>
            </div>
            <div className="padTopThird">
                <a href = "#" className="linkDecor textAdjust"><IoIosCalendar />View Calendar</a>
            </div>
        </div>

        <hr></hr>

        <div className="d-flex flex-column">
            <div className="d-flex padBottom20">
            <IoIosCalendar />
                <div className="d-flex flex-column">
                    <div>
                        <a href="#" className="linkDecor">Lecture</a>
                    </div>
                    <div className="textAdjust">
                        CS4550.12631.202410
                    </div>
                    <div className="textAdjust">
                        Sep 7 at 11:45am
                    </div>
                </div>
            </div>
            <div className="d-flex padBottom20">
            <IoIosCalendar />
                <div className="d-flex flex-column">
                    <div>
                        <a href="#" className="linkDecor">Lecture</a>
                    </div>
                    <div className="textAdjust">
                        CS4550.12631.202410 
                    </div>
                    <div className="textAdjust">
                        Sep 11 at 11:45am
                    </div>
                </div>   
            </div>
            <div className="d-flex padBottom20">
            <IoIosCalendar />
                <div className="d-flex flex-column">
                    <div>
                        <a href="#" className="linkDecor">CS5610 06 SP23 Lecture</a>
                    </div>
                    <div className="textAdjust">
                        CS4550.12631.202410
                    </div>
                    <div className="textAdjust">
                        Sep 11 at 6pm
                    </div>
                </div>  
            </div>
        </div>
    </div>
      </>
  );
}
export default Home;