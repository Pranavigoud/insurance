import React from "react";

const ReferInstructions = () => {
  return (
    <div className="bg-[#fff9f3] flex justify-center py-20 px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1c1b] mb-8 md:mb-0">
          How does it work?
        </h2>

        {/* Right Section */}
        <div className="flex flex-col gap-10 md:w-1/2">
          {/* Step 1 */}
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center bg-[#c86a1f] text-white font-bold rounded-full w-10 h-10 text-lg">
              1
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1c1c1b] mb-1">
                Tell them about us
              </h3>
              <p className="text-lg text-[#1c1c1b] leading-relaxed">
                You can send them a referral link straight from the app.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center bg-[#c86a1f] text-white font-bold rounded-full w-10 h-10 text-lg">
              2
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1c1c1b] mb-1">
                Get your £50 voucher
              </h3>
              <p className="text-lg text-[#1c1c1b] leading-relaxed">
                Once your friend has been with us for 21 days without making a
                claim, we’ll send each of you a £50 Amazon voucher.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-5">
            <div className="flex items-center justify-center bg-[#c86a1f] text-white font-bold rounded-full w-10 h-10 text-lg">
              3
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1c1c1b] mb-1">
                Keep recommending us
              </h3>
              <p className="text-lg text-[#1c1c1b] leading-relaxed">
                Refer as many friends as you like! And get hundreds of pounds
                worth of Amazon vouchers every year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferInstructions;
