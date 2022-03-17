import React from "react";
import "./styles.css";

export default function Modal({ children, close, state }) {
  return (
    <div
      className="modalWrapper"
      style={{ display: state ? "flex" : "none" }}
      onClick={close}
    >
      <div className="modalText">
        {children}

        <div className="modalClose">X</div>
      </div>
    </div>
  );
}
