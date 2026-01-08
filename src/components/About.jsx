import React from "react";

export const About = () => {
  return (
    <div className="w-full h-[826px] flex flex-col justify-between pt-[96] pr-[80] pb-[96] pl-[80] bg-[#111827] items-center max-sm:w-full max-sm:h-[1434px] max-sm:pt-16 max-sm:pr-4 max-sm:pb-16 max-sm:pl-4  ">
      <div className="w-[1280] h-[634px] pr-[32] pl-[32] flex flex-col gap-12 max-sm:w-full max-sm:h-[1306px] max-sm:flex max-sm:flex-col max-sm:gap-6  max-sm:flex max-sm:items-center">
        <div className="w-[1216px] h-[28] gap-4 flex items-center justify-center max-sm:w-auto ">
          <div className="w-[105px] h-[20] rounded-xl bg-[#374151] pt-1 pr-5 pb-1 pl-5 font-medium text-[14px] text-[#D1D5DB] flex items-center max-sm:w-auto ">
            About me
          </div>
        </div>
        <div className="w-[400px] h-[480px]  object-fit flex flex-row gap-[150px] max-sm:w-full max-sm:h-[1254px] max-sm:flex max-sm:flex-col max-sm:gap-[48px] ">
          <img
            className="h-[480] w-[400] object-cover"
            src="Aboutpic.jpg"
            alt=""
          />
          <div className="w-[584px] h-[558px] flex flex-col gap-6 max-sm:w-full max-sm:h-[826px] max-sm:flex max-sm:flex-col max-sm:gap-6 ">
            <div className="w-[540px] h-[36] font-semibold text-[30px] text-[#F9FAFB] max-sm:w-full  max-sm:h-[64px] max-sm:text-[24px] ">
              Curious about me? Here you have it:
            </div>
            <div className="w-[584px] h-[498px] flex flex-col gap-4 max-sm:w-full ">
              <div className="w-[584px] h-[96] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full max-sm:h-[144px] ">
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </div>
              <div className="w-[584px] h-[96] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full max-sm:h-[168px]">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </div>
              <div className="w-[584px] h-[96px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full max-sm:h-[144px]">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </div>
              <div className="w-[256px] h-[24px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full max-sm:h-[24px] ">
                Finally, some quick bits about me.
              </div>
              <div className="w-[584px] h-[58px] flex flex-row gap-[10px] max-sm:w-full ">
                <div className="w-[287px] h-[58px] flex flex-col gap-[10px] max-sm:w-full">
                  <div className="w-[287px] h-[24px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full">
                    • B.E. in Computer Engineering
                  </div>
                  <div className="w-[287px] h-[24px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full">
                    • Full time freelancer
                  </div>
                </div>
                <div className="w-[287px] h-[24px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full ">
                  • Avid learner
                </div>
              </div>
              <div className="w-[584px] h-[48px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-full">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
