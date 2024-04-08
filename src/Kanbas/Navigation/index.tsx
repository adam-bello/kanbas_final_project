import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaRegQuestionCircle } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { PiTelevisionSimpleThin } from "react-icons/pi";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" style={{color: "grey"}}/>  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> }, 
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaRegClock className="fs-2" /> }, 
    { label: "Studio", icon: <PiTelevisionSimpleThin className="fs-2" /> },
    { label: "Commons", icon: <RxExit className="fs-2" /> }, 
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> }
  ];

  const { pathname } = useLocation();

  return (
    <ul className="wd-kanbas-navigation">
        <li >
            <Link to={"http://northeastern.edu"}><img src={`/images/Neu.png`} style={{ width: 55, height: 45}}/></Link>
        </li>
        {links.map((link, index) => (
            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                <Link to={`/Kanbas/${link.label}`}> 
                    <div>{link.icon}</div> 
                    <div>{link.label}</div>
                </Link>
            </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;