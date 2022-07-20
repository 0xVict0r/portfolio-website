import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Work</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://0xvict0r-financial-superapp-00--home-sy75xw.streamlitapp.com/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-project p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Financial SuperApp</p>
              <p>A home-made aggregator of financial tools</p>
            </div>
          </a>
        </Link>

        <Link href="https://cryptoast.fr/author/victor-morizon/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-project p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Cryptoast</p>
              <p>My technical blockchain articles</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/0xVict0r/stable-dividend-stock-trading-strategy" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-project p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Algo Trading Bot</p>
              <p>My telegram stock buying signal bot</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
