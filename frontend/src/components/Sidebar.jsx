import React from "react";

export const Sidebar = () => {
  return (
    <div className="text-white flex flex-col text-center pt-8 border-t-2">
      <h2 className="pb-8 text-lg font-semibold">Navigation</h2>
      <ul>
        <li>Hosts</li>
        <li>Properties</li>
      </ul>
    </div>
  );
};
