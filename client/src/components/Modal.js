import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

// NOTES

/* Whenever an event occurs, we always get an event object as an argument. Which we can then use to stop the default behavior of event Propagation, by calling the stopPropagation method, ensuring that the event does not continue to bubble up. Thus, preventing the invocation of the onClick arrow function on our outer parent div, when a user clicks inside the modal. */
