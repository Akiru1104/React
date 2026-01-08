import React from "react";

export const Info = () => {
  return (
    <div className="w-full h-[556px] flex flex-row gap-[80px] justify-center pt-[96px] pr-[80px] pb-[96px] pl-[80px] bg-[#030712] max-sm:h-[904px] max-sm:pt-16 max-sm:pr-4 max-sm:pb-16 max-sm:pl-4 max-sm:flex max-sm:flex-col-reverse">
      <div className="w-[600px] h-[364px] flex flex-col gap-12 max-sm:w-full max-sm:h-[428px] max-sm:flex  ">
        <div className="w-[600px] h-[176px] flex flex-col gap-2 max-sm:w-full max-sm:h-[240px] max-sm:flex max-sm:flex-col max-sm:gap-2 ">
          <div className="w-[400px] h-[72px] font-bold text-[60px] text-[#F9FAFB] max-sm:w-[250px] max-sm:h-[40px] max-sm:text-[36px] max-sm:font-semibold ">
            Hi, I’m Tom 👋
          </div>
          <p className="w-[600px] h-[96px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full max-sm:h-[192px] max-sm:font-normal max-sm:text-[16px]">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className=" h-[56px] flex flex-col gap-2 max-sm:w-full max-sm:h-[56px] ">
          <div className=" h-[24px] flex flex-row gap-2">
            <img src="Icon.png" alt="" />
            <p className="w-[190px] h-[24px] font-normal text-[16px] text-[#D1D5DB]">
              Ulaanbaatar, Mongolia
            </p>
          </div>
          <div className="h-[24px] flex flex-row gap-2">
            <img src="green.png" alt="" />
            <p className=" h-[24px] font-normal text-[16px] text-[#D1D5DB]">
              Available for new projects
            </p>
          </div>
        </div>
        <div className=" h-[36] flex flex-row gap-4 items-center">
          <img src="caticon.png" alt="" />
          <img src="birdicon.png" alt="" />
          <img src="3rdicon.png" alt="" />
        </div>
      </div>
      <div className=" h-[320] w-[280] flex justify-end  items-end max-sm:w-full max-sm:h-[300] max-sm:flex max-sm:items-center max-sm:justify-center max-sm:mt-[64]">
        <img className="h-[320] w-[280] border-8 border-[#374151]" src="Profile.png" alt="" />
      </div>
    </div>
  );
};
