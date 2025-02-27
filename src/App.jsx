import React from "react";
import TestUseState from "./hooks/TestUseState";
import TestUseEffect from "./hooks/TestUseEffect";
import TestUseRef from "./hooks/TestUseRef";
import TestUseMemo from "./hooks/TestUseMemo";

const App = () => {
  return (
    <div>
      <TestUseState />
      <TestUseEffect />
      <TestUseRef />
      <TestUseMemo />
    </div>
  );
};

export default App;
