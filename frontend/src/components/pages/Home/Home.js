import React, { useState } from "react";
import Buttons from "./Buttons/ButtonsContainer";

import Table from "./Table/Table";

function Home() {
  const [dataFetched, setDataFetched] = useState(false);

  // Set data received from child component table switch button
  const handleDataReceived = (newData) => {
    console.log(" Handle Data received in Home.js", newData);
    setDataFetched(newData);
  };

  // Not used
  const handleClearData = (newData) => {
    console.log("Clear Data in Home.js", newData);
    if (newData) {
      setDataFetched(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "auto",
          flexDirection: "row",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "auto" }}>
          {" "}
          <Buttons
            onDataReceived={handleDataReceived}
            onClearData={handleClearData}
          />
        </div>

        <div style={{ margin: "auto" }}> 
        {" "}
        {dataFetched ? <Table /> :  null } 
        </div>

      </div>
    </>
  );
}

export default Home;
