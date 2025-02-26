import React, { useEffect, useRef, useState } from "react";

const TestUseRef = () => {
  //first
  const [value, setValue] = useState(0);
  const increase = () => {
    setValue((prev) => prev + 1);
  };
  const decrease = () => {
    setValue((prev) => prev - 1);
  };
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  //second
  const inputElem = useRef("");
  const addElem = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "black";
    inputElem.current.style.color = "white";
  };
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#FFDCCC]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useRef
      </h1>
      {/* first */}
      <div className="flex flex-row items-center justify-between px-80">
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5">
          <button
            onClick={increase}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            +1
          </button>
          <h1 className="text-3xl font-bold">The Count is {value}!</h1>
          <button
            onClick={decrease}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            -1
          </button>
          <h1 className="text-3xl font-bold">Render is {count.current}!</h1>
        </div>
        {/* second */}
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5">
          <input
            ref={inputElem}
            type="text"
            placeholder="Enter Text"
            className="w-100 rounded-3xl border border-gray-500 bg-white p-2 text-center"
          />
          <button
            onClick={addElem}
            className="w-50 cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestUseRef;
