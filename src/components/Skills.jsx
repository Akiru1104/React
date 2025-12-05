import { skills } from "@/stack/skillData";

export const Skills = () => {
  return (
    <div className="w-full min-h-[560px] flex items-center justify-center py-24 px-20 bg-[#030712]">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-12 px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center">
            <div className="w-[75px] h-7 rounded-xl py-1 px-5 bg-[#374151] font-medium text-[14px] text-[#01D5DB] text-center"></div>
          </div>

          <div className="text-[20px] font-normal text-center w-full max-w-xl">
            The skills, tools and technologies I am really good at
          </div>
        </div>

        <div className="w-full grid grid-cols-8 gap-x-[86px] gap-y-12 justify-center">
          {skills.map(({ image, label }, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img src={image} alt={label} className="h-12 w-auto" />
              <div className="font-normal text-[18px] ">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
