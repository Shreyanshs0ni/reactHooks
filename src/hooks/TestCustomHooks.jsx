import useLocalStorage from "./useLocalStorage";

const TestCustomHooks = () => {
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("userid", "");
  return (
    <div className="relative h-[100vh] w-[100%] bg-[#C3EDC0]">
      <h1 className="absolute top-10 m-auto w-[100%] text-center text-3xl font-bold">
        useCustomHooks
        {/* <p className="mt-5 text-sm font-medium underline">Open Console</p> */}
      </h1>

      <div className="flex h-[100vh] flex-col items-center justify-center gap-10">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          value={name}
          className="w-100 rounded-3xl border border-gray-500 bg-white p-2 text-center"
        />
        <h1 className="text-3xl font-bold">Hello, {name}!</h1>
        <input
          onChange={(e) => setId(e.target.value)}
          type="number"
          placeholder="Enter id"
          value={id}
          className="w-100 rounded-3xl border border-gray-500 bg-white p-2 text-center"
        />
        <h1 className="text-3xl font-bold">Your Id is {id}!</h1>
      </div>
    </div>
  );
};

export default TestCustomHooks;
