export  function Sidebar({ currentStep }) {
    const steps = [
      { number: 1, title: "STEP 1", description: "INTRODUCTION" },
      { number: 2, title: "STEP 2", description: "DETAILS" },
      { number: 3, title: "STEP 3", description: "ADD-ONS" },
      { number: 4, title: "STEP 4", description: "SUMMARY" },
    ];
  
    return (
      <div className="w-1/3 text-white bg-white p-6 space-y-6 side-bar-container">
        <ul className="space-y-4">
          {steps.map((step) => (
            <li key={step.number} className="flex items-center space-x-5">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  currentStep === step.number
                    ? "bg-[#c1e8ff] text-black "
                    : "border-1 border-white "
                }`}
              >
                <span className="font-bold text-lg">{step.number}</span>
              </div>
              <div>
                <span className="text-[14px] opacity-[.4]">{step.title}</span>
                <p className="text-xs font-bold">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
        

      </div>
    );
  }
  