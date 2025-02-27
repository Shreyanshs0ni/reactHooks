import React, { useMemo, useState } from "react";

const TestUseMemo = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);
  function CountCube(num) {
    console.log("Calculation Done!");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => CountCube(value), [value]);

  return (
    <div className="relative h-[100vh] w-[100%] bg-[#B6FFA1]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useMemo
        <p className="mt-5 text-sm font-medium underline">Open Console</p>
      </h1>
      <div className="flex flex-row items-center justify-between px-80">
        <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="number"
            placeholder="Enter Text"
            className="w-100 rounded-3xl border border-gray-500 bg-white p-2 text-center"
          />
          <h1 className="text-3xl font-bold">The Cube is {result}!</h1>
        </div>
        <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
          <h1 className="text-3xl font-bold">The Count is {count}!</h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Increase by 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestUseMemo;
