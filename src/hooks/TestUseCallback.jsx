import React, { useCallback, useState } from "react";
import Header from "../components/header";

const TestUseCallback = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const newFunc = useCallback(() => {}, []);
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#FFBD73]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useCallback
        <p className="mt-5 text-sm font-medium underline">Open Console</p>
      </h1>

      {/* <div className="flex flex-row items-center justify-between px-80"> */}
      <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
        <Header newFunc={newFunc} />
        <h1 className="text-3xl font-bold">The Count is {count}!</h1>

        <button
          onClick={increaseCount}
          className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Increase
        </button>
      </div>
      {/* <div className="flex h-[100vh] flex-col items-center justify-center gap-10"></div> */}
      {/* </div> */}
    </div>
  );
};

export default TestUseCallback;
