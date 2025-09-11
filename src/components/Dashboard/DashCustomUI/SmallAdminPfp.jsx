import React from "react";

const SmallAdminPfp = ({ fullName = "Mahinul Tanvir Mahin", role = "Admin" }) => {
  // Get initials from full name
  const getInitials = (name) => {
    const namesArray = name.split(" ");
    const initials = namesArray.map((n) => n[0].toUpperCase()).join("");
    return initials.slice(0, 2); // Use first 2 letters
  };

  return (
    <div className="flex bg-beige items-center justify-between p-2 rounded-xl">
      <div>
        <h3>{fullName}</h3>
        <p>{role}</p>
      </div>
      <div
        className="flex items-center justify-center size-18 rounded-full border-4 border-green-light text-white font-bold bg-primary"
      >
        {getInitials(fullName)}
      </div>
    </div>
  );
};

export default SmallAdminPfp;
