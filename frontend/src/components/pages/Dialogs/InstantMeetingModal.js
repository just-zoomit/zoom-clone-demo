import React from "react";
import { useNavigate } from "react-router-dom";

import { OrangeButton as InstantMeetingButton } from "../Buttons/buttonComposition";

// Adpoted Component Composition pattern and pass data from child to parent pattern

export function NewMeetingButton() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const POST_OPTIONS = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: 1,
        }),
      };

      const response = await fetch("/api/zoom/create", POST_OPTIONS);
      const json = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (json.id && json.password) {
        navigate(`/msdk/?mn=${json.id}&pw=${json.password}`);
      } else {
        console.log("Error: No data received");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InstantMeetingButton
          type="submit"
          text="videocam"
          label="New Meeting"
        />
      </form>
    </div>
  );
}
