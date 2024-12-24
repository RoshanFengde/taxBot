import React from "react";

const HowItWorks = () => {
  return (
    <div id="how-it-works"
    className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 -mt-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
      </div>
      <div className="container mx-auto flex flex-col space-y-16 mt-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4">
            1
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Connect Your Bank Account
          </h3>
          <p className="text-gray-300 max-w-md whitespace-nowrap">
            Link your bank account securely to track your expenses automatically.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 w-20 mx-auto"></div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4">
            2
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            AI Identifies Deductions
          </h3>
          <p className="text-gray-300 max-w-md whitespace-nowrap">
            AI identifies potential tax deductions based on your transactions.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 w-20 mx-auto"></div>

        {/* Step 3 */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4">
            3
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            File Taxes Easily
          </h3>
          <p className="text-gray-300 max-w-md whitespace-nowrap">
            Generate detailed reports and file your taxes automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
