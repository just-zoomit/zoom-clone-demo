import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BigSuccessButton } from "./buttonComposition";

import { InstantMeeting } from "../Dialogs/InstantMeetingModal";

// Adpoted Component Composition pattern

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 80px;
  padding: 1;
  width: 50%;
  height: 200px;
  flex-direction: row | row-reverse | column | column-reverse;
`;

export default function Buttons(props) {
  const navigate = useNavigate();

  const [, setData] = useState(null);

  const startInstantMeeting = (data) => {
    // Catch error if data is null
    const { id, password } = data;
    if (!id || !password) {
      navigate(`/msdk/?mn=${id}&pw=${password}`);
    } else {
      console.log("Error: No data received");
    }
  };

  const handleDataReceived = (data) => {
    setData(data);
    startInstantMeeting(data);
  };

  // Handle data received from child component table switch button
  const handleClick = (event) => {
    event.preventDefault();
    try {
      props.onDataReceived(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearData = () => {
    props.onClearData();
  };

  const [isData, setIsData] = useState(false);

  // Switch button to show list meeting
  const handleListClick = () => {
    setIsData(!isData);
  };

  let button;

  if (isData) {
    button = (
      <BigSuccessButton
        text="clear_all"
        onClick={handleClearData}
        label="Clear Data"
      />
    );
  } else {
    button = (
      <BigSuccessButton text="list" onClick={handleClick} label="List" />
    );
  }

  return (
    <>
      <div>
        <DivContainer>
          <InstantMeeting onDataReceived={handleDataReceived} />
        
          <BigSuccessButton text="list" onClick={handleClick} label="List" />
          {/* Ex. clear Table data switch */}
          <BigSuccessButton
            text="clear_all"
            onClick={handleClearData}
            label="Clear Data"
          />
        </DivContainer>
      </div>
    </>
  );
}
