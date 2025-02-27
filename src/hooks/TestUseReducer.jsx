import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count + action.data,
      };
    case "decrease":
      return {
        ...state,
        count: state.count - action.data,
      };
  }
};

const TestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#FA7070]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useReducer
        {/* <p className="mt-5 text-sm font-medium underline">Open Console</p> */}
      </h1>
      <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-bold">The Count is {state.count}!</h1>

        <button
          onClick={() => {
            dispatch({ type: "increase", data: 2 });
          }}
          className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Increase
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "decrease",
              data: 2,
            });
          }}
          className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-300 hover:bg-black hover:text-white"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default TestUseReducer;
