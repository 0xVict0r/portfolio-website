import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Work</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <Link href="https://www.superapp.morizon.dev/" passHref>
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

        <Link href="https://github.com/0xVict0r" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-project p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Github Repo</p>
              <p>My Repo containing more projects</p>
            </div>
          </a>
        </Link>

        <Link href="https://www.movie-app.morizon.dev/" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-project p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
              <p className="text-xl font-semibold">Movie Aggregator</p>
              <p>A movie lookup/rating aggregator tool </p>
            </div>
          </a>
        </Link>

      </div>
    </div>
  );
};

export default Projects;
