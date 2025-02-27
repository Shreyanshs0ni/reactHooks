import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+91 6375886808";
  const name = "Shreyansh";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
