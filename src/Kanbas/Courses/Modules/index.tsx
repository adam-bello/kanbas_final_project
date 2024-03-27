import ModuleList from "./List";
import "./index.css";

import React from "react";

import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Modules() {
  return (
    <>
    <div className="flex-fill">
        <div className="d-flex flex-column spaceTop">
            <ModuleList />
        </div>
    </div>
    </>
  );
}
export default Modules;