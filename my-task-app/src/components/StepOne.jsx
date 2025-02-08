import HeaderOfStep from "./HeaderOfStep";

export function StepOne({ nextStep }) {
  return (
    <div className="step-container">
      {/* Header Section */}
      <HeaderOfStep 
        title="Personal Info" 
        description="Please provide your name, email address, and phone number." 
      />

      {/* Form Content */}
      <form className="">

        <div className="step-main-content  py-6">
        <label htmlFor="name" className="input-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. John Doe"
          className="mt-1 input-field block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-500"
        />

        <label htmlFor="email" className="input-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="e.g. john.doe@example.com"
          className="mt-1 input-field block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-500"
        />

        <label htmlFor="phone" className="input-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          className="mt-1 input-field block w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring focus:ring-blue-500"
        />
</div>
        {/* Next Button */}
        <button
          onClick={nextStep}
          className="mt-6 next-step-btn text-white font-semibold rounded-md py-2 px-4  transition duration-200 float-right"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}
