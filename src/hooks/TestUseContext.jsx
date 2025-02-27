import React from "react";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

const TestUseContext = () => {
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#CAF4FF]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useContext
        {/* <p className="mt-5 text-sm font-medium underline">Open Console</p> */}
      </h1>

      <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
        <Profile />
        <Footer />
      </div>
    </div>
  );
};

export default TestUseContext;
