import React from "react";
import { Rubik_Mono_One } from "next/font/google";
const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });
 
export const Header = () => {
  return (
    <div className="flex flex-row bg-[#030712] w-full h-[68px] pt-4 pr-20 pb-4 pl-20 items-center justify-between max-sm">
      <div
        className={`w-19 h-9 font-bold text-[30px] text-[#F9FAFB] ${rubik.className}`}
      >
        TOM
      </div>
      <div className="w-[554px] h-9 gap-6 flex flex-row items-center text-[#D1D5DB] font-medium text-[16px] max-sm:hidden ">
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <img src="headerLine.png" alt="" />
        <img className="w-9 h-9" src="headerLogo.png" alt="" />
        <div className="w-[136] h-9 rounded-xl flex justify-center items-center gap-2 bg-[#F9FAFB] text-[#111827] text-[16px] font-medium">
          Download CV
        </div>
      </div>
      <img
        className="w-[36] h=[36px] hidden max-sm:flex max-sm:justify-center "
        src="Icon Button4.png"
        alt=""
      />
    </div>
  );
};