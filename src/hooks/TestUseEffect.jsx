import React, { useEffect, useMemo, useState } from "react";

const TestUseEffect = () => {
  //first
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  //second
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeHandler = (e) => {
    console.log("e", e.target);
    setWindowSize({
      width: e.target.innerWidth,
      height: e.target.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-[100%] bg-[#FDB7EA]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useEffect
      </h1>{" "}
      <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
        <h1 className="text-3xl font-bold">
          This page has been rendered {count} times!
        </h1>
        <h1 className="text-3xl font-bold">
          Size of Window: Width is {windowSize.width} and Height is{" "}
          {windowSize.height}
        </h1>
      </div>
    </div>
  );
};

export default TestUseEffect;
