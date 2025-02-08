import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="toggle-container">
      <span className={`toggle-label ${isMonthly ? "active" : ""}`}>Monthly</span>
      <div className="toggle-switch" onClick={handleToggle}>
        <div className={`toggle-knob ${isMonthly ? "left" : "right"}`}></div>
      </div>
      <span className={`toggle-label ${!isMonthly ? "active" : ""}`}>Yearly</span>
    </div>
  );
};

export default ToggleSwitch;
