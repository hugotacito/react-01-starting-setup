import React from "react";
import Transition from "react-transition-group/Transition";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClass = {
    entering: "BackdropOpen",
    entered: "BackdropOpen",
    exiting: "BackdropClosed",
    exited: "BackdropClosed",
  };

  const duration = 300;

  return (
    <Transition in={props.show} timeout={duration} mountOnEnter unmountOnExit>
      {(state) => <div className={`Backdrop ${cssClass[state]}`}></div>}
    </Transition>
  );
};

export default backdrop;
