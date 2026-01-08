import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-[68px] pt-6 pr-20 pb-6 pl-20 flex items-center justify-center bg-[#111827] max-sm:w-full max-sm:h-[68px] max-sm:pt-6 max-sm:pb-6">
      <div className="w-[1280px] h-[20px] pr-8 pl-8 flex items-center justify-center max-sm:w-[400px] max-sm:h-[20px] ">
        <div className="w-[305px] h-[20px] flex flex-row gap-2 ">
          <img className="w-[16px] h-[16px]" src="lasticon.png" alt="" />
          <div className="w-[281px] h-[20px] font-normal text-[14px] text-[#D1D5DB]">
            2024 | Greetings with 🤍 from Ulaanbaatar
          </div>
        </div>
      </div>
    </div>
  );
};
