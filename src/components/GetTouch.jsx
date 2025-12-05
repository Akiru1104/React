import React from "react";

export const GetTouch = () => {
  return (
    <div className="h-[560px]">
      <div className="py-24 px-20 bg-[#030712] flex flex-col gap-12 items-center ">
        <div className=" py-1 px-5 bg-[#374151] rounded-xl w-[122]">
          Get in touch
        </div>
        <div className="text-xl leading-7 font-normal">
          What’s next? Feel free to reach out to me if you're looking for <br />
          a developer, have a query, or simply want to connect.
        </div>
        <div className="flex gap-5 font-semibold text-4xl">
          <img src="mail.png" alt="" />
          <div>tom@pinecone.mn</div>
          <img src="box.png" alt="" />
        </div>
        <div className="flex gap-5 font-semibold text-4xl">
          <img src="phone.png" alt="" />
          <div>+976 88112233</div>
          <img src="box.png" alt="" />
        </div>
        <div>You may also find me on these platforms!</div>
        <div className="flex">
          <img src="caticon.png" alt="" />
          <img src="birdicon.png" alt="" />
          <img src="3rdicon.png" alt="" />
        </div>
      </div>
      <div>
        <div className="flex py-6 px-20 bg-[#111827] justify-center items-center] gap-2">
          <img src="lasticon.png" alt="" />
          <div className="font-normal leading-5 text-sm text-[#D1D5DB] flex  gap-2">
            2024 | Greetings with ❤️️ from Ulaanbaatar
          </div>
        </div>
      </div>
    </div>
  );
};
