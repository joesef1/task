import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import {StepForm} from "./components/StepForm";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
    console.log("Step", currentStep + 1); // Log the new step after clicking
  };
  
  ;
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex min-h-screen ">
      <Sidebar currentStep={currentStep} />
      <StepForm currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
}