import { useState } from "react";
import ThankYou from "./ThankYou";
import { Checkout } from "./Checkout.JSX";
import HeaderOfStep from "./HeaderOfStep";

export function StepFour({ prevStep }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="step-container">
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <>
       
      {/* Header Section */}
      <HeaderOfStep 
        title="Finishing Up" 
        description="Double-check everything looks OK before confirming." 
      />

          {/* Summary Table */}
          <div className="step-main-content">
              <Checkout/>
          </div>
      

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={prevStep}
              className="go-back-btn"
            >
             Go Back
            </button>
            <button
              onClick={handleSubmit}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </>
      )}
    </div>
  );
}
