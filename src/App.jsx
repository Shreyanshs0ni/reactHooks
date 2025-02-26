import React from "react";
import TestUseState from "./hooks/TestUseState";
import TestUseEffect from "./hooks/TestUseEffect";

const App = () => {
  return (
    <div>
      <TestUseState />
      <TestUseEffect />
    </div>
  );
};

export default App;
