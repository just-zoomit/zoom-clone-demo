import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDom from "react-dom";

import "./styles.css";

// Adpoted Component Composition pattern and pass data from child to parent pattern

export const JoinMeetingModal = ({ setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const [state, setState] = useState({ role: 1 });
  const { role } = state;
  const id = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (id.current.value === "" || password.current.value === "") {
        alert("Please enter a valid meeting ID and password");
      } else {
        setShowModal(false);
        navigate(`/msdk/?mn=${id.current.value}&pw=${password.current.value}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div>
          <h2>Join Meeting</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="topic"
                placeholder="Meeting ID"
                ref={id}
                required={true}
              />
            </div>
            &nbsp; &nbsp;
            <div>
              <input
                type="text"
                id="topic"
                placeholder="Meeting Password"
                ref={password}
                required={true}
              />
            </div>
            <hr class="solid"></hr>
            <div>
            
              <button
                type="submit"
                style={{
                  background: "#808080",
                
                }}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              &nbsp; &nbsp;

              <button
                type="submit"
                style={{ background: "#316efd" }}
              >
                {role === 1 ? "Join Meeting" : "Start Meeting"}
              </button>

              
            </div>

          </form>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
