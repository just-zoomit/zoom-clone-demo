import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import ZoomMSDK from "./components/pages/ZoomMSDK/ZoomMSDK";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/msdk" element={<ZoomMSDK />} />
      </Routes>
    </div>
  );
}

export default App;
