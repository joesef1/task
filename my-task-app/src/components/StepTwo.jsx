import ToggleSwitch from "./ToggleSwitch";
import HeaderOfStep from "./HeaderOfStep";
import { Plans } from "./Plans";

export function StepTwo({ nextStep, prevStep }) {
  return (
    <div className="step-container">
      {/* Header Section */}
      <HeaderOfStep
        title="Select Your Plan"
        description="You have the option of monthly or yearly billing."
      />

      {/* Plan Options */}
      

       
    <div className="pricing-container mt-6 space-y-4 inputs-container flex-col">
  <Plans />


<div>

   <ToggleSwitch/>
</div>

    </div>


      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={prevStep}
          className=" go-back-btn"
        >
          Go Back
        </button>
        <button
          onClick={nextStep}
          className="next-step-btn text-white font-semibold rounded-md py-2 px-4  transition duration-200"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
