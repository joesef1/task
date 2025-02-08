import React from "react";

export function Summary({ selectedPlan, addOns, totalCost, onChangePlan }) {
  return (
    <div className="py-6">
        <div className="rounded-lg p-6  bg-blue-50">

      {/* Plan Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {selectedPlan.name} ({selectedPlan.billingCycle})
          </h3>
          <button
            onClick={onChangePlan}
            className="text-sm text-blue-500 hover:underline"
          >
            Change
          </button>
        </div>
        <p className="text-lg font-medium text-gray-800">{selectedPlan.cost}</p>
      </div>

      {/* Add-Ons */}
      <div className="flex flex-col gap-2">
        {addOns.map((addOn) => (
          <div key={addOn.name} className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{addOn.name}</p>
            <p className="text-sm text-gray-800">{addOn.cost}</p>
          </div>
        ))}
      </div>
      </div>


      {/* Total */}
      <div className="flex justify-between items-center mt-6 pt-4  p-6 bg-white">
        <p className="text-sm font-medium text-gray-500">Total (per month)</p>
        <p className="text-lg font-bold text-blue-500">{totalCost}</p>
      </div>
    </div>
  );
}
