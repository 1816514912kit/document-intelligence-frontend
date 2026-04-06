import React from "react";

const DashboardHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-base-content/70">{subtitle}</p>
    </div>
  );
};

export default DashboardHeader;
