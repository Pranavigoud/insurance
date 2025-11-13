import React from "react";
import heroImage from "../assets/refer-friend.jpg"; // replace with your image path

const ReferFriendHero = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#1d1d1b] min-h-screen justify-center items-center p-6 md:p-12">
      {/* Left Card */}
      <div className="bg-[#fff8ef] rounded-3xl md:w-1/2 w-full p-10 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1d1d1b] leading-tight mb-4">
          Refer a friend.<br />Get rewarded.
        </h1>
        <p className="text-lg md:text-xl text-[#1d1d1b] mb-8">
          Recommend <span className="font-medium">Marshmallow</span> and get a<br />
          <span className="font-medium">£50 Amazon voucher</span> each – one for<br />
          you, one for your friend.
        </p>

        <button className="bg-[#ff71b1] text-[#1d1d1b] font-semibold px-8 py-3 rounded-full text-lg hover:opacity-90 transition-all">
          Refer a friend
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 text-[#1d1d1b]/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c0-.667.167-1.333.5-2l3.5-6h-7l3.5 6c.333.667.5 1.333.5 2zm0 0v8m0 0h3m-3 0H9"
            />
          </svg>
          <span className="underline text-sm font-medium cursor-pointer">
            T & Cs Apply
          </span>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 md:ml-8 flex justify-center">
        <img
          src={heroImage}
          alt="Refer a friend"
          className="rounded-3xl object-cover w-full h-[450px] md:h-[550px]"
        />
      </div>
    </div>
  );
};

export default ReferFriendHero;
