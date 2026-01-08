import React from "react";

export const GetTouch = () => {
  return (
    <div className="w-full h-[560px] flex items-center justify-center pt-24 pr-20 pb-24 pl-20 bg-[#030712] max-sm:w-full max-sm:h-[472px] max-sm:pt-14 max-sm:pr-4 max-sm:pb-14 max-sm:pl-4">
      <div className="w-[1280px] h-[368px] pr-8 pl-8 flex flex-col gap-12  items-center max-sm:w-auto max-sm:h-[344px] max-sm:flex max-sm:flex-col max-sm:gap-6  ">
        <div className="w-[1216px] h-[100px] flex flex-col gap-4 max-sm:gap-10 max-sm:w-auto ">
          <div className="w-[1216px] h-[28px] flex items-center justify-center max-sm:w-auto">
            <div className="w-[122px] h-[28px] rounded-xl pt-1 pr-5 pb-1 pl-5 bg-[#374151] flex items-center justify-center font-medium text-[14px] text-[#D1D5DB] max-sm:w-auto">
              Get in touch
            </div>
          </div>
          <div className="w-[1216px] h-[56px] flex items-center justify-center max-sm:w-auto">
            <div className="w-[576px] h-[56px] font-normal text-[20px] text-[#D1D5DB] flex items-center justify-center text-center max-sm:w-[343px] max-sm:h-[112px] max-sm:text-center">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </div>
          </div>
        </div>
        <div className="w-[436px] h-[104px] flex flex-col gap-4 items-center max-sm:w-[252px] max-sm:h-[72px] max-sm:gap-2 max-sm:mt-15  ">
          <div className="w-[436px] h-[44px] flex flex-row gap-5  items-center max-sm:w-[252px] max-sm:h-[36px] ">
            <img
              className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
              src="mail.png"
              alt=""
            />
            <div className="w-[320px] h-[60px] font-semibold text-[36px] text-[#F9FAFB] max-sm:text-[18px] max-sm:h-[28px]">
              tom@pinecone.mn
            </div>
            <img
              className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
              src="Button.png"
              alt=""
            />
          </div>
          <div className="w-[380px] h-[44px] flex felx-row gap-5  items-center max-sm:w-[224px] max-sm:h-[36px]">
            <img
              className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
              src="phone.png"
              alt=""
            />
            <div className="w-[300px] h-[60px] font-semibold text-[36px] text-[#F9FAFB] max-sm:text-[18px] max-sm:h-[28px]">
              +976 88112233
            </div>
            <img
              className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[24px]"
              src="Button.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[312px] h-[68px] flex flex-col gap-2  items-center">
          <div className="w-[312px] h-[24px] font-normal text-[16px] text-[#D1D5DB] text-center ">
            You may also find me on these platforms!
          </div>
          <div className="w-[116px] h-[36px] flex flex-row gap-1  items-center">
            <div className="w-[36px] h-[36px] p-[6px] flex items-center justify-center">
              <img className="w-[34px] h-[32px] " src="caticon.png" alt="" />
            </div>
            <div className="w-[36px] h-[36px] p-[6px] flex items-center justify-center">
              <img className="w-[24px] h-[24px]" src="birdicon.png" alt="" />
            </div>
            <div className="w-[36px] h-[36px] p-[6px] flex items-center justify-center">
              <img className="w-[24px] h-[24px]" src="3rdicon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
