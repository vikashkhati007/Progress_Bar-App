import React, { useRef } from "react";
import "./ProgressComp.css";

export default function ProgressComponents(props) {
  return (
    <div>
      <div className="container">
        <h1>Progress Bar</h1>
        <ul>
          <h2>Progress Status</h2>
          <li>
            UI status
            <input type="number" onChange={props.uihandler} />
          </li>
          <li>
            UX status
            <input type="number" onChange={props.uxhandler} />
          </li>
          <li>
            Data status
            <input type="number" onChange={props.datahandler} />
          </li>
        </ul>
      </div>
    </div>
  );
}
