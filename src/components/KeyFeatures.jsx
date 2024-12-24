import React from "react";

const KeyFeatures = () => {
  return (
    <div id="features"
      className="h-screen text-white flex flex-col justify-center"
      style={{
        backgroundImage: "linear-gradient(to right, #1e3c72, #2a5298, #ff6e7f)",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Feature 1 */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Seamless Integration</h3>
          <p className="text-gray-200">
            Connect with multiple banking platforms without hassle for a
            streamlined experience.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Real-Time Analytics</h3>
          <p className="text-gray-200">
            Get real-time insights into your financial health, enabling better
            decision-making.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Automated Reporting</h3>
          <p className="text-gray-200">
            Automate the generation of detailed tax reports to simplify your tax
            filing process.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Secure Data Protection</h3>
          <p className="text-gray-200">
            Top-level security measures ensure that your financial data is
            always protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
