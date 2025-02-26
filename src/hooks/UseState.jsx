import { useState } from "react";

const UseState = () => {
  //first
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
  };
  //second
  const [car, setCar] = useState({
    brand: "Ferrai",
    carColor: "Red",
    year: "2023",
    model: "Rome",
  });
  const changeCarColor = () => {
    setCar((prev) => ({
      ...prev,
      carColor: "blue",
    }));
  };
  const changeCarBrand = () => {
    setCar((prev) => ({
      ...prev,
      brand: "Mustang",
    }));
  };

  //third
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="h-[100vh] w-[100%] bg-[#B7B1F2]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useState
      </h1>
      <div className="flex items-center justify-between px-80">
        {/* first */}

        <div className="flex h-[100vh] flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">The Color is {color}!</h1>
          <button
            onClick={changeColor}
            className="cursor- pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Change Color
          </button>
        </div>
        {/* second */}
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5">
          {" "}
          <h1 className="text-3xl font-bold">My {car.brand}!</h1>
          <p>
            It is a {car.carColor} {car.model} from {car.year}
          </p>
          <button
            onClick={changeCarColor}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Change Car Color
          </button>
          <button
            onClick={changeCarBrand}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Change Car Brand
          </button>
        </div>
        {/* third */}
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">The Count is {count}!</h1>

          <button
            onClick={increaseCount}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Increase
          </button>
          <button
            onClick={decreaseCount}
            className="cursor-pointer rounded-3xl border border-black p-2 text-black transition-colors duration-500 hover:bg-black hover:text-white"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
