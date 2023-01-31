import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Table from "../Table/Table";

function Home() {
  const [, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const handleDataReceived = (newData) => {
    console.log("Data received in Home.js", newData);
    setData(newData);
    setDataFetched(true);
  };

  const handleClearData = () => {
    setData([]);
    setDataFetched(false);
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
          <Buttons
            onDataReceived={handleDataReceived}
            onClearData={handleClearData}
          />
        </div>
        &nbsp; &nbsp;
        <div style={{ margin: "auto" }}>{dataFetched ? <Table /> : null}</div>
      </div>
    </>
  );
}

export default Home;
