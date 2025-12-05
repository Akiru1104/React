import React from "react";

export const About = () => {
  return (
    <div className="bg-[#111827] w-full flex flex-col content-center py-24 px-20 gap-12">
      <div className="flex justify-center">
        <div className="bg-[#374151] w-26 rounded-xl flex justify-center">
          About me
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <img className="w-[400] " src="Ariunzul.png" alt="" />
          <img className="w-[400]" src="Background.png" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold text-3xl leading-9">
            Curious about me? Here you have it:
          </div>
          <div className="font-normal text-base leading-6 w-[584px]">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </div>
          <div className="font-normal text-base leading-6 w-[584px]">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </div>
          <div className="font-normal text-base leading-6 w-[584px]">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </div>
          <div className="font-normal text-base leading-6">
            Finally, some quick bits about me.
          </div>
          <div className="font-normal text-base leading-6">
            <ul className="flex gap-2.5">
              <div className="flex flex-col w-[287px] gap-2.5">
                <li className="list-disc">B.E in Computer Engineering</li>
                <li className="list-disc">Flil time freelaner</li>
              </div>
              <div>
                <li className="list-disc">Avid learner</li>
              </div>
            </ul>
          </div>
          <div className="font-normal text-base leading-6 w-[584px]">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </div>
        </div>
      </div>
    </div>
  );
};
