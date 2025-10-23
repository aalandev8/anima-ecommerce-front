import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-800">Panel de Control</h2>
      <div className="flex items-center gap-3">
        <span className="text-gray-600">Admin</span>
        <img
          src="/images/user-avatar.png"
          alt="user"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Navbar;
