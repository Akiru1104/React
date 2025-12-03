import React from "react";

export const Info = () => {
  return (
    <div className="flex">
      <div className="py-24 px-20  flex gap-12 flex-col">
        <div className="text-6xl font-bold leading-16">Hi,I'm Zulaa 👋</div>
        <div className="text-base font-normal">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </div>
        <div className=" flex  flex-col gap-2">
          <div className="flex">
            <img src="location.png" alt="" />
            <div className="font-normal text-base leading-6">
              Ulaanbaatar, Mongolia
            </div>
          </div>
          <div className="flex">
            <img src="green.png" alt="" />
            <div className="font-normal text-base leading-6">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="flex gap-1">
          <img src="caticon.png" alt="" />
          <img src="birdicon.png" alt="" />
          <img src="3rdicon.png" alt="" />
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="relative...">
        <img className="border-8 border-[#030712]" src="Ariunzul.png" alt="" />
        <img className="absolute " src="Background.png" alt="" />
      </div>
    </div>
  );
};
