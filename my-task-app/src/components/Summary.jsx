import React from "react";

export function Summary({ selectedPlan, addOns, totalCost, onChangePlan }) {
  return (
    <div className="py-6">
        <div className="rounded-lg p-6  bg-blue-50">

      {/* Plan Section */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {selectedPlan.name} ({selectedPlan.billingCycle})
          </h3>
          <button
            onClick={onChangePlan}
            className="text-sm text-gray-400 !px-0 underline"
          >
            Change
          </button>
        </div>
        <span className="text-xl font-bold text-gray-800">{selectedPlan.cost}</span>
      </div>

      {/* Add-Ons */}
      <div className="flex flex-col gap-2">
        {addOns.map((addOn) => (
          <div key={addOn.name} className="flex justify-between items-center">
            <p className="text-sm text-gray-400">{addOn.name}</p>
            <p className="text-sm text-gray-800">{addOn.cost}</p>
          </div>
        ))}
      </div>
      </div>


      {/* Total */}
      <div className="flex justify-between items-center mt-6 pt-4  p-6 bg-white">
        <p className="text-sm font-medium text-gray-400">Total (per month)</p>
        <span className="total-cost">{totalCost}</span>
      </div>
    </div>
  );
}
