import { expe } from "@/stack/experience";

export const Experience = () => {
  return (
    <div className="bg-[#111827] flex flex-col gap-12 items-center  ">
      <div>
        <div className="bg-[#374151] w-26 rounded-xl flex justify-center">
          Experience
        </div>
        <div className="text-xl">
          Here is a quick summary of my most recent experiences:
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-items-center gap-12 p-8">
          {expe.map(({ image, tittle, date, list }) => (
            <div className="bg-[#1F2937] rounded-xl w-[896] flex flex-col] p-8 gap-12 ">
              <img
                src={image}
                alt=""
                className="h-7 w-[102px] place-items-start"
              />
              <div>
                <div className="text-xl font-semibold">{tittle}</div>
                <ul
                  className="flex flex-col gap-1
                "
                >
                  {list.map((item, index) => (
                    <li key={index} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" flex justify-items-end">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
