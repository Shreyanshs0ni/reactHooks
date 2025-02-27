import React from "react";
import TestUseState from "./hooks/TestUseState";
import TestUseEffect from "./hooks/TestUseEffect";
import TestUseRef from "./hooks/TestUseRef";
import TestUseMemo from "./hooks/TestUseMemo";
import TestUseCallback from "./hooks/TestUseCallback";
import TestUseContext from "./hooks/TestUseContext";
import TestUseReducer from "./hooks/TestUseReducer";
import TestUseLayoutEffect from "./hooks/TestUseLayoutEffect";

const App = () => {
  return (
    <div>
      <TestUseState />
      <TestUseEffect />
      <TestUseRef />
      <TestUseMemo />
      <TestUseCallback />
      <TestUseContext />
      <TestUseReducer />
      <TestUseLayoutEffect />
    </div>
  );
};

export default App;
