import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="w-full h-[811px] bg-[#010116] flex items-center justify-center">
      <img
        className="w-full h-full object-cover"
        alt="AI Technology Hero"
        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </div>
  );
};