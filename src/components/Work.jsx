import { workdata } from "@/stack/workmap";

export const Work = () => {
  return (
    <div>
      <div className="flex flex-col py-24 px-20 gap-4 justify-center">
        <div className="py-1 px-5 rounded-xl bg-[#374151] w-[75px]">Work</div>
        <div className=" font-normal text-xl ">
          Some of the noteworthy projects I have built:
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#374151] w-[576] h-[480px] flex justify-center items-center ">
          <img className="h-96 w-[480px] rounded-xl" src="ubcab.png" alt="" />
        </div>

        <div className="w-[576] bg-[#1F2937] flex">
          <div className=" flex flex-col gap-6 p-12">
            <div className="text-xl font-semibold leading-7">UBCab</div>
            <div className="text-base font-normal leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div>
              <div>React</div>
            </div>
            <div>
              <img src="workicon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="w-[576] bg-[#1F2937] flex">
            <div className=" flex flex-col gap-6 p-12">
              <div className="text-xl font-semibold leading-7">Mentorhub</div>
              <div className="text-base font-normal leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </div>
              <div className="w-[480]">
                <div className="bg-[#374151] flex flex-col  gap-2.5 py-1 px-5 rounded-xl">
                  {workdata.map((index) => (
                    <div key={index}>
                      <div>{index.workname}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img src="workicon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#374151] w-[576] h-[480px] flex justify-center items-center ">
            <img
              className="h-96 w-[480px] rounded-xl"
              src="mentorhub.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#374151] w-[576] h-[480px] flex justify-center items-center ">
          <img className="h-96 w-[480px] rounded-xl " src="itoim.png" alt="" />
        </div>

        <div className="w-[576] bg-[#1F2937] flex">
          <div className=" flex flex-col gap-6 p-12">
            <div className="text-xl font-semibold leading-7">iToim</div>
            <div className="text-base font-normal leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div>
              <div>React</div>
            </div>
            <div>
              <img src="workicon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
