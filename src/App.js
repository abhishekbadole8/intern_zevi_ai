import React from "react";
import Homepage from "./page/Homepage/Homepage";
import Style from "./App.module.css";
import ResultPage from "./page/Resultpage/Resultpage";

function App() {
  return (
    <div className={Style.App}>
      {/* <Homepage /> */}
      <ResultPage />
    </div>
  );
}

export default App;
