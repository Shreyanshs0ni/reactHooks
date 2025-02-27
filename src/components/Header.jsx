import React from "react";

const Header = () => {
  console.log("Header Loaded");
  return <div className="text-3xl font-bold underline">Header</div>;
};

export default React.memo(Header);
