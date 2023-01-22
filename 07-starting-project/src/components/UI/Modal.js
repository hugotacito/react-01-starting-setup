import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlaysElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop {...props} />, overlaysElement)}
      {ReactDOM.createPortal(<Overlay {...props} />, overlaysElement)}
    </>
  );
};
export default Modal;
