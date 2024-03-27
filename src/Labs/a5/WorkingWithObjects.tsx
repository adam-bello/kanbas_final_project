import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    

      const [module, setModule] = useState({
        id: 1, name: "Sanji Vs Zoro",
        description: "Is Sanji stronger than Zoro",
        course: "OP1111",
      });
      const MODULE_URL = "http://localhost:4000/a5/module"
    
  return (
    <div>
      <h3>Working With Objects</h3>

      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>


      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <br></br>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <br></br>
      <a href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <br></br>
      <a href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a>
      <br></br>
      <a href="http://localhost:4000/a5/module/description">
        Get Module Description
      </a>
      <br></br>

      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <br></br>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <br></br>
      <a href={`${MODULE_URL}/name/${module.name}`}>
        Update Name 
      </a>
      <br></br>
      <input type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}/>
      <br></br>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <br></br>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>
      <br></br>
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <br></br>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked })}
            checked={assignment.completed}/>
            <br></br>

      <a href={`${MODULE_URL}/description/${module.description}`}>
        Update Module Description 
      </a>
      <input type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}/>
      

    </div>
  );
}
export default WorkingWithObjects;