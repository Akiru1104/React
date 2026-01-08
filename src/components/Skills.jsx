import { skills } from "@/stack/skillData";

export const Skills = () => {
  return (
    <div className="w-full h-[560px] flex items-center justify-center pt-24 pr-20 pb-24 pl-20 bg-[#030712] max-sm:w-full max-sm:h-[916px] max-sm:pt-16 max-sm:pr-4 max-sm:pb-16 max-sm:pl-4">
      <div className="w-[1280px] h-[368px] flex  items-center flex-col gap-12 pr-8 pl-8 max-sm:w-full max-sm:h-[788px] max-sm:flex max-sm:flex-col max-sm:gap-6  ">
        <div className="w-[1216px] h-[72px] flex flex-col items-center gap-4 max-sm:w-[343px] max-sm:h-[100px]">
          <div className="h-[28px] flex items-center justify-center ">
            <div className="w-[75px] h-[28px] rounded-xl pt-1 pr-5 pb-1 pl-5 bg-[#374151] font-medium text-[14px] text-[#D1D5DB] max-sm:w-auto ">
              Skills
            </div>
          </div>
          <div className="w-[576px] h-[28px] font-normal text-[20px] text-[#D1D5DB] flex items-center justify-center max-sm:w-[343px] max-sm:h-[56px] max-sm:text-[18px] max-sm:text-center">
            The skills, tools and technologies I am really good at:
          </div>
        </div>
        <div className="w-[1216px] h-[248px] grid grid-cols-8 gap-x-[86px] gap-y-12 max-sm:grid-cols-3 max-sm:w-[343px] max-sm:h-[664px] max-sm:gap-x-[20px] max-sm:gap-y-[20px] ">
          {skills.map((item) => (
            <div className="flex flex-col justify-center items-center gap-2 ">
              <img src={item.image} alt="" />
              <p className="font-normal text-[18px] text-[#D1D5DB]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
