import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Victor Morizon</p>
        <p className="mt-1 text-lg text-gray-300">
          21 y/o Aerospace Engineer, Freelance Writer, Econometrics/Quant Finance Grad Student
        </p>

        <p className="mt-4 text-gray-400">
          Building Data & Financial apps in Python <br /> Writing Technical Blockchain articles at Cryptoast  <br /> Studying Econometrics/Quant Finance in Rotterdam
        </p>

        <p className="mt-4 text-gray-400">
          Currently in the Netherlands  <br />
          Born in France, raised in Asia 
        </p>

        <Link href="https://www.linkedin.com/in/victor-morizon/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-300 duration-100 hover:ml-2 italic font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me on Linkedin
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assets/avatar.png"
          width="200"
          height="200"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
