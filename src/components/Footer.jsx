import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const { phone, name } = useContext(AppContext);
  return (
    <div className="flex h-20 w-100 items-center justify-between gap-10 bg-zinc-400 px-4">
      <h2 className="text-3xl font-semibold">Footer</h2>
      <h3 className="text-lg">Phone : {phone}</h3>
    </div>
  );
};

export default Footer;
