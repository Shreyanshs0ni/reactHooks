import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <div className="flex h-40 w-50 flex-col items-center justify-between gap-5 bg-slate-950 py-4 text-center text-white">
      <h2 className="text-lg font-semibold">Contact</h2>
      <h3>Phone : {phone}</h3>
      <h3>Name : {name}</h3>
    </div>
  );
};

export default Contact;
