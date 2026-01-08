import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-evenly text-center pt-4 pl-20 pr-20 pb-4">
      <div className="text-3xl">TOM</div>
      <div className="flex gap-6 items-center">
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <img src="/headerLine.png" alt="" />
        <img src="/headerLogo.png" alt="" />
        <div className="bg-[#F9FAFB] text-[#111827] gap-2 pt-1.5 pr-4 pb-1.5 pl-4 rounded-2xl w-[136px]">
          Download CV
        </div>
      </div>
    </div>
  );
};
