import React, { useState, useEffect } from "react";
import ProgressBarComp from "./ProgressBarComp";
import ProgressComponents from "./ProgressComponents";

export default function Progress() {
  const [completed, setCompleted] = useState(0);
  const [items, setitems] = useState({
    ui: 90,
    ux: 57,
    data: 30
  });

  const ProjectData = [
    { bgcolor: "#DF2E38", completed: items.ui },
    { bgcolor: "#FFB84C", completed: items.ux },
    { bgcolor: "#5800FF", completed: items.data }
  ];

  function uihandler(e) {
    setitems((prevState) => ({
      ...prevState,
      ui: e.target.value
    }));
  }
  function uxhandler(e) {
    setitems((prevState) => ({
      ...prevState,
      ux: e.target.value
    }));
  }
  function datahandler(e) {
    setitems((prevState) => ({
      ...prevState,
      data: e.target.value
    }));
  }

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 1000);
  }, []);

  return (
    <div>
      <ProgressComponents
        uihandler={uihandler}
        uxhandler={uxhandler}
        datahandler={datahandler}
      />
      {ProjectData.map((data) => (
        <ProgressBarComp bgcolor={data.bgcolor} completed={data.completed} />
      ))}
      <ProgressBarComp
        completed={completed}
        bgcolor={
          completed < 20
            ? "#DF2E38"
            : completed < 40
            ? "#0002A1"
            : completed < 60
            ? "#59CE8F"
            : completed < 80
            ? "#5800FF"
            : "#EA047E"
        }
      />
    </div>
  );
}
