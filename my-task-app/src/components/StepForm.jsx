import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";


  export function StepForm({ currentStep, nextStep, prevStep }) {
    const steps = {
      1: <StepOne nextStep={nextStep}/>, 
      2: <StepTwo nextStep={nextStep} prevStep={prevStep} />, 
      3: <StepThree nextStep={nextStep} prevStep={prevStep} />, 
      4: <StepFour prevStep={prevStep} />
    };
  
    return (
        <>
      <div className=" w-[50%] m-auto ">
        {steps[currentStep]}
      </div>
        </>
    );
  }