import React, { useState } from "react";

export const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Arcade");

  const handleSelect = (plan) => {
    setSelectedPlan(plan); 
  };

  return (
<div className="flex gap-6 w-full flex-col sm:flex-row py-6">
<div
    className={`card flex-1 ${selectedPlan === "Arcade" ? "selected" : ""}`}
    onClick={() => handleSelect("Arcade")}
  >
    <div className="icon" style={{ backgroundColor: "#FFAF7E" }}>🕹️</div>
    <div className="card-content">
      <h3 className="title">Arcade</h3>
      <p className="price">$9/mo</p>
    </div>
  </div>

  <div
    className={`card flex-1 ${selectedPlan === "Advanced" ? "selected" : ""}`}
    onClick={() => handleSelect("Advanced")}
  >
    <div className="icon" style={{ backgroundColor: "#F7A8D3" }}>🖥</div>
    <div className="card-content">
      <h3 className="title">Advanced</h3>
      <p className="price">$12/mo</p>
    </div>
  </div>

  <div
    className={`card flex-1 ${selectedPlan === "Pro" ? "selected" : ""}`}
    onClick={() => handleSelect("Pro")}
  >
    <div className="icon" style={{ backgroundColor: "#7BA7FF" }}>🎮</div>
    <div className="card-content">
      <h3 className="title">Pro</h3>
      <p className="price">$15/mo</p>
    </div>
  </div>
</div>

  );
};
