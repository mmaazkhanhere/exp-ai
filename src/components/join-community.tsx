import React from "react";

const JoinCommunity = () => {
  return (
    <section className="relative w-full py-40 mx-auto max-w-[1115px] flex flex-col gap-20">
      <div className="flex items-center justify-between ">
        <div className="flex flex-col items-start gap-10">
          <h2 className="text-6xl font-['BankGothic'] ">JOIN THE WISHLIST</h2>
          <p className="text-gray-200 text-sm font-['Franie']">
            I&#39;m In ! Keep me informed about the project.
          </p>
        </div>
        <img src="/waitlist.png" className="object-cover" alt="WaitList " />
      </div>

      <button className="self-center w-[332px] h-[67px] rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity font-['Franie']">
        Elevate My Experience
      </button>
    </section>
  );
};

export default JoinCommunity;
