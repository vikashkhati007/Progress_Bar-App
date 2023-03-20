import React from "react";

export default function ProgressBarComp(props) {
  const progresscontainer = {
    height: "20px",
    backgroundColor: "grey",
    borderRadius: "20px",
    margin: "30px 5rem"
  };
  const progressbar = {
    width: props.completed + "%",
    height: "inherit",
    borderRadius: "inherit",
    backgroundColor: props.bgcolor,
    display: "flex",
    alignItems: "center",
    transition: "width 0.5s ease-in-out",
    justifyContent: "right"
  };

  const span = {
    color: "white",
    fontFamily: "sans-serif",
    padding: "0px 5px"
  };
  return (
    <div style={progresscontainer}>
      <div style={progressbar}>
        <span style={span}>{props.completed}%</span>
      </div>
    </div>
  );
}
