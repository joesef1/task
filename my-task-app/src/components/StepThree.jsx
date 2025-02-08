import React, { useState } from "react";
import HeaderOfStep from "./HeaderOfStep";

const AddOnItem = ({ title, description, price, isSelected, onToggle }) => {
  return (
<div
  className="flex items-center justify-between border-1 rounded-lg px-7 py-6 cursor-pointer"
  style={{
    borderColor: isSelected ? "oklch(0.46 0.26 275.21)" : "gray", 
    backgroundColor: isSelected ? "#f4f5f7" : "transparent",
  }}
  onClick={onToggle}
  role="button"
  aria-checked={isSelected}
  tabIndex={0}
>
  <div className="flex items-center gap-4">
    <input
      type="checkbox"
      checked={isSelected}
      readOnly
      className="w-5 h-5 cursor-pointer"
      style={{
        color: "oklch(0.46 0.26 275.21)", 
        accentColor: "oklch(0.46 0.26 275.21)", 
      }}
    />
    <div>
      <h3 className="font-medium" style={{ color: "#3a213d" }}>
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
  <p className="font-medium" style={{ color: "oklch(0.46 0.26 275.21)" }}>
    {price}
  </p>
</div>

  );
};

export function StepThree({ nextStep, prevStep }) {
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: true,
    largerStorage: true,
    customizableProfile: false,
  });

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prevState) => ({
      ...prevState,
      [addOn]: !prevState[addOn],
    }));
  };

  return (
    <div className="step-container">
      {/* Header Section */}
      <HeaderOfStep
        title="Pick Add-Ons"
        description="Enhance your experience by selecting optional add-ons."
      />

      {/* Add-Ons Options */}
      <div className="step-main-content py-6 flex flex-col gap-5">
        <AddOnItem
          title="Online service"
          description="Access to multiplayer games"
          price="+$1/mo"
          isSelected={selectedAddOns.onlineService}
          onToggle={() => toggleAddOn("onlineService")}
        />
        <AddOnItem
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price="+$2/mo"
          isSelected={selectedAddOns.largerStorage}
          onToggle={() => toggleAddOn("largerStorage")}
        />
        <AddOnItem
          title="Customizable profile"
          description="Custom theme on your profile"
          price="+$2/mo"
          isSelected={selectedAddOns.customizableProfile}
          onToggle={() => toggleAddOn("customizableProfile")}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={prevStep}
          className="go-back-btn text-gray-600 hover:text-gray-800 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => nextStep(selectedAddOns)}
          className="next-step-btn bg-mauve-500 hover:bg-mauve-600 text-white font-semibold rounded-md py-2 px-4 transition duration-200"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
