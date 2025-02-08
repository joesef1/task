import { useState } from "react";
import ThankYou from "./ThankYou";
import { Checkout } from "./Checkout.JSX";

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
          <h2 className="text-2xl font-bold text-gray-800">Finishing Up</h2>
          <p className="text-gray-600 mt-2">
            Double-check everything looks OK before confirming.
          </p>

          {/* Summary Table */}
        <Checkout/>

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
