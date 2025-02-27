import React from "react";
import Contact from "./Contact";

const Profile = () => {
  return (
    <div className="flex h-100 w-100 flex-col items-center justify-center gap-20 bg-slate-500">
      <h2 className="text-center text-3xl font-semibold">Profile</h2>
      <Contact />
    </div>
  );
};

export default Profile;
