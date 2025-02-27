import React, { useEffect, useLayoutEffect } from "react";

const TestUseLayoutEffect = () => {
  useEffect(() => {
    console.log("Hello from useEffect");
  }, []);
  // first it render useLayoutEffect then it render dom elements then useEffect renders
  useLayoutEffect(() => {
    console.log("Hello from useLayoutEffect");
  }, []);
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#fbd96b]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useLayoutEffect
        <p className="mt-5 text-sm font-medium underline">Open Console</p>
      </h1>
      <div className="flex items-center justify-between px-80">
        <div className="flex h-[100vh] flex-col items-center justify-center gap-10 overflow-hidden">
          <h1 className="text-3xl font-bold">Hello Everyone</h1>

          {Array(12000)
            .fill(" ")
            .map((item, index) => (
              <li key={index}>{Math.pow(Math.random(), 10)}</li>
            ))} 
        </div>
      </div>
    </div>
  );
};

export default TestUseLayoutEffect;
