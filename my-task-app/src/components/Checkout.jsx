import React from 'react'
import { Summary } from './Summary';

export const Checkout = () => {
    const handleChangePlan = () => {
        console.log("Change Plan Clicked");
      };
const selectedPlan = {
    name: "Arcade",
    billingCycle: "Monthly",
    cost: "$9/mo",
  };
  
  const addOns = [
    { name: "Online service", cost: "+$1/mo" },
    { name: "Larger storage", cost: "+$2/mo" },
  ];
  
  const totalCost = "+$12/mo";
  
  return (
    <div className="mt-6">
        <Summary
          selectedPlan={selectedPlan}
          addOns={addOns}
          totalCost={totalCost}
          onChangePlan={handleChangePlan}
        />
      </div>
  )
}

