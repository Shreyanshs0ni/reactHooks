import React from "react";

const TestUseLayoutEffect = () => {
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#fbd96b]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useLayoutEffect
        {/* <p className="mt-5 text-sm font-medium underline">Open Console</p> */}
      </h1>

      <div className="flex h-[100vh] flex-col items-center justify-center gap-10"></div>
    </div>
  );
};

export default TestUseLayoutEffect;
