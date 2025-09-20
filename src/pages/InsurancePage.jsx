import React from "react";

const InsurancePage = () => {
  const affiliateUrl = "https://ekta.insure/en/?marker=661841&lang=en";

  const handleClick = () => {
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-3">
          <span>🛡️</span>
          <span>Travel Insurance</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          We’ve matched you with a top travel insurance provider.
            Get covered instantly with our trusted partner.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700"
          >
            Get Insurance
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
