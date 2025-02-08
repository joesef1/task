// import React, { useState } from "react";
// import HeaderOfStep from "./HeaderOfStep";

// export function StepThree({ nextStep, prevStep }) {
//   const [selectedAddOns, setSelectedAddOns] = useState({
//     onlineService: true,
//     largerStorage: true,
//     customizableProfile: false,
//   });

//   const toggleAddOn = (addOn) => {
//     setSelectedAddOns((prevState) => ({
//       ...prevState,
//       [addOn]: !prevState[addOn],
//     }));
//   };

//   return (
//     <div className="step-container">
//       {/* Header Section */}
//       <HeaderOfStep
//         title="Pick Add-Ons"
//         description="Enhance your experience by selecting optional add-ons."
//       />

//       {/* Add-Ons Options */}
//       <div className=" step-main-content py-6 flex flex-col gap-4">
//         {/* Online Service */}
//         <div
//           className={`flex items-center justify-between border-2 rounded-lg px-7 py-6 cursor-pointer ${
//             selectedAddOns.onlineService ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//           onClick={() => toggleAddOn("onlineService")}
//         >
//           <div className="flex items-center gap-4">
//             <input
//               type="checkbox"
//               checked={selectedAddOns.onlineService}
//               readOnly
//               className="w-5 h-5 text-blue-500 accent-blue-500 cursor-pointer"
//             />
//             <div>
//               <h3 className="font-medium text-gray-800">Online service</h3>
//               <p className="text-sm text-gray-500">
//                 Access to multiplayer games
//               </p>
//             </div>
//           </div>
//           <p className="text-blue-500 font-medium">+$1/mo</p>
//         </div>

//         {/* Larger Storage */}
//         <div
//           className={`flex items-center justify-between border-2 rounded-lg px-7 py-6 cursor-pointer ${
//             selectedAddOns.largerStorage ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//           onClick={() => toggleAddOn("largerStorage")}
//         >
//           <div className="flex items-center gap-4">
//             <input
//               type="checkbox"
//               checked={selectedAddOns.largerStorage}
//               readOnly
//               className="w-5 h-5 text-blue-500 accent-blue-500 cursor-pointer"
//             />
//             <div>
//               <h3 className="font-medium text-gray-800">Larger storage</h3>
//               <p className="text-sm text-gray-500">Extra 1TB of cloud save</p>
//             </div>
//           </div>
//           <p className="text-blue-500 font-medium">+$2/mo</p>
//         </div>

//         {/* Customizable Profile */}
//         <div
//           className={`flex items-center justify-between border-2 rounded-lg px-7 py-6 cursor-pointer ${
//             selectedAddOns.customizableProfile ? "border-blue-500 bg-blue-50" : "border-gray-300"
//           }`}
//           onClick={() => toggleAddOn("customizableProfile")}
//         >
//           <div className="flex items-center gap-4">
//             <input
//               type="checkbox"
//               checked={selectedAddOns.customizableProfile}
//               readOnly
//               className="w-5 h-5 text-blue-500 accent-blue-500 cursor-pointer"
//             />
//             <div>
//               <h3 className="font-medium text-gray-800">Customizable profile</h3>
//               <p className="text-sm text-gray-500">
//                 Custom theme on your profile
//               </p>
//             </div>
//           </div>
//           <p className="text-blue-500 font-medium">+$2/mo</p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-6 flex justify-between">
//         <button onClick={prevStep} className="go-back-btn">
//           Go Back
//         </button>
//         <button
//           onClick={() => nextStep(selectedAddOns)}
//           className="next-step-btn text-white font-semibold rounded-md py-2 px-4 transition duration-200"
//         >
//           Next Step
//         </button>
//       </div>
//     </div>


//   );
// }
import React, { useState } from "react";
import HeaderOfStep from "./HeaderOfStep";

const AddOnItem = ({ title, description, price, isSelected, onToggle }) => {
  return (
    <div
      className={`flex items-center justify-between border-2 rounded-lg px-7 py-6 cursor-pointer ${
        isSelected ? "border-mauve-500 bg-mauve-50" : "border-gray-300"
      }`}
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
          className="w-5 h-5 text-mauve-500 accent-mauve-500 cursor-pointer"
        />
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <p className="text-mauve-500 font-medium">{price}</p>
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
      <div className="step-main-content py-6 flex flex-col gap-4">
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
