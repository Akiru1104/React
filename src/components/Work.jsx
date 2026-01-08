import { workdata } from "@/stack/workmap";

export const Work = () => {
  return (
    <div className="w-full h-[1848px] pt-24 pr-20 pb-24 pl-20 bg-[#030712] flex items-center justify-center max-sm:w-full max-sm:h-[2616px] max-sm:pt-14 max-sm:pr-4 max-sm:pb-14 max-sm:pl-4">
      <div className=" h-[1656px] pr-8 pl-8 flex flex-col gap-12 max-sm:w-auto max-sm:h-[2488px] max-sm:flex max-sm:flex-col max-sm:gap-6 max-sm:items-center  ">
        <div className=" h-[72px] flex flex-col gap-4  items-center justify-center max-sm:w-auto max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-6">
          <div className=" h-[28px] flex items-center justify-center">
            <div className="w-[75px] h-[28px] rounded-xl pt-1 pr-5 pb-1 pl-5 bg-[#374151] font-medium text-[14px] text-[#D1D5DB] max-sm:w-auto">
              Work
            </div>
          </div>
          <div className="w-[1216px] h-[28px] flex items-center justify-center max-sm:w-auto max-sm:flex max-sm:items-center max-sm:justify-center">
            <div className="w-[576px] h-[28px] font-normal text-[20px] text-[#D1D5DB] flex items-center justify-center max-sm:w-auto max-sm:text-center max-sm:text-[18px]">
              Some of the noteworthy projects I have built:
            </div>
          </div>
        </div>

        <div className="w-[1152px] h-[480px] rounded-xl flex flex-row max-sm:w-auto max-sm:h-[772px] max-sm:flex max-sm:flex-col">
          <div className="w-[576px] h-[480px] p-12 flex items-center justify-center  bg-[#374151] max-sm:w-auto max-sm:h-[256px]">
            <img
              className="w-[480px] h-[384px] rounded-xl max-sm:w-auto max-sm:h-[192px] "
              src="ubcab.png"
              alt=""
            />
          </div>
          <div className="w-[576px] h-[480px] p-12 flex flex-col gap-6 bg-[#1F2937]  max-sm:w-auto max-sm:h-[516px]">
            <div className="w-[480px] h-[28px] font-semibold text-[20px] text-[#F9FAFB] max-sm:w-auto max-sm:text-[18px]">
              UBCab
            </div>
            <div className="w-[480px] h-[96px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-auto max-sm:h-[144px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="w-[480px] h-[100px] flex flex-wrap gap-2 max-sm:w-auto max-sm:h-[172px]  ">
              {workdata.map((item) => (
                <div className=" w-fit h-[28px] rounded-xl pt-1 pr-5 pb-1 pl-5 bg-[#374151] flex items-center justify-center">
                  <div className="max-w-[112px] min-w-[60px] h-[20px] font-normal text-[14px] text-[#D1D5DB]">
                    {item.workname}
                  </div>
                </div>
              ))}
            </div>
            <img className="w-[36px] h-[36px] " src="workicon.png" alt="" />
          </div>
        </div>

        <div className="w-[1152px] h-[480px] rounded-xl flex flex-row max-sm:w-[343px] max-sm:h-[772px] max-sm:flex max-sm:flex-col-reverse">
          <div className="w-[576px] h-[480px] p-12 flex flex-col gap-6  bg-[#1F2937] max-sm:w-[343px] max-sm:h-[516px] ">
            <div className="w-[480px] h-[28px] font-semibold text-[20px] text-[#F9FAFB]  max-sm:w-[279px] max-sm:text-[18px]">
              Mentorhub
            </div>
            <div className="w-[480px] h-[96px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-[279px] max-sm:h-[144px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="w-[480px] h-[100px] flex flex-wrap gap-2 max-sm:w-[279px] max-sm:h-[172px] ">
              {workdata.map((item) => (
                <div className="w-fit  max-h-[28px] rounded-xl pt-1 pr-5 pb-1 pl-5 bg-[#374151] flex items-center justify-center">
                  <div className="max-w-[119px]  max-h-[28px]  font-normal text-[14px] text-[#D1D5DB]">
                    {item.workname}
                  </div>
                </div>
              ))}
            </div>
            <img className="w-[36px] h-[36px] " src="workicon.png" alt="" />
          </div>
          <div className="w-[576px] h-[480px] p-12 flex items-center justify-center  bg-[#374151] max-sm:w-[343px] max-sm:h-[256px]">
            <img
              className="w-[480px] h-[384px] rounded-xl max-sm:w-[279px] max-sm:h-[192px] "
              src="mentorhub.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-[1152px] h-[480px] rounded-xl flex flex-row max-sm:w-[343px] max-sm:h-[772px] max-sm:flex max-sm:flex-col">
          <div className="w-[576px] h-[480px] p-12 flex items-center justify-center  bg-[#374151] max-sm:w-[343px] max-sm:h-[256px]">
            <img
              className="w-[480px] h-[384px] rounded-xl max-sm:w-[279px] max-sm:h-[192px] "
              src="itoim.png"
              alt=""
            />
          </div>
          <div className="w-[576px] h-[480px] p-12 flex flex-col gap-6  bg-[#1F2937] max-sm:w-[343px] max-sm:h-[516px]">
            <div className="w-[480px] h-[28px] font-semibold text-[20px] text-[#F9FAFB] max-sm:w-[279px] max-sm:text-[18px]">
              iToim
            </div>
            <div className="w-[480px] h-[96px] font-normal text-[16px] text-[#D1D5DB] max-sm:w-[279px] max-sm:h-[144px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </div>
            <div className="w-[480px] h-[100px] flex flex-wrap gap-2 max-sm:w-[279px] max-sm:h-[172px] ">
              {workdata.map((item) => (
                <div className="w-fit h-[28px] rounded-xl pt-1 pr-5 pb-1 pl-5 bg-[#374151] flex items-center justify-center">
                  <div className="h-[20px] font-normal text-[14px] text-[#D1D5DB]">
                    {item.workname}
                  </div>
                </div>
              ))}
            </div>
            <img className="w-[36px] h-[36px] " src="workicon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
