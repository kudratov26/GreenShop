import React from "react";
import { P } from "../../../common/headings/headings";

export const Description = () => {
  return (
    <div className="w-full h-[500px] mb-[127px]">
      <div className="flex gap-[30px]">
        <span className="hover:text-green hover:underline hover:font-bold underline-offset-[12px]">
          Product Description
        </span>
        <span className="hover:text-green hover:underline hover:font-bold underline-offset-[12px]">
          Reviews (19)
        </span>
      </div>
      <hr className="w-full bg-green mt-[6px]" />
      <div className="mt-[18px] w-full h-[190px] dfcol gap-[30px]">
        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
          est tristique auctor. Donec non est at libero vulputate rutrum. Morbi
          ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
          adipiscing cursus eu, suscipit id nulla.
        </p>
        <p>
          Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
          sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
          Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
          vulputate, sapien libero hendrerit est, sed commodo augue nisi non
          neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
          accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
          luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
          euismod eget. The ceramic cylinder planters come with a wooden stand
          to help elevate your plants off the ground.
        </p>
        <ul>
          <div className="dfcol gap-1 mb-[18px]">
            <P color="text-black">Living Room:</P>
            <li className="font-normal">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
          <div className="dfcol gap-1 mb-[18px]">
            <P color="text-black font-extrabold">Dining Room:</P>
            <li>
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </li>
          </div>
          <div className="dfcol gap-1 mb-[18px]">
            <P color="text-black font-extrabold">Office:</P>
            <li>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
