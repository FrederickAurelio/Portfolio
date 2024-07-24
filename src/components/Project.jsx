import { useLanguage } from "../context/TextContext";
import { projects } from "../utils/data";
import { HiChevronDown, HiMiniArrowUpRight } from "react-icons/hi2";

function Project({ project }) {
  const { language } = useLanguage();

  return (
    <div className="mb-10 flex justify-center">
      <div className="relative flex w-full flex-col rounded-2xl bg-white p-4 shadow-lg drop-shadow-lg md:mx-3 lg:mx-5">
        <img
          className="w-full rounded-xl"
          src={project.img}
          alt={project.title[language]}
        />
        <h2 className="my-2 text-xl font-semibold text-sky-900">
          {project.title[language]}
        </h2>
        <p className="text-justify text-sm lg:text-base text-sky-950">
          {project.desc[language]}
        </p>
        <p className="flex h-full items-end justify-between py-1 font-semibold text-sky-500">
          <a
            href={project.refMore}
            className="flex cursor-pointer items-center duration-200 hover:scale-105"
          >
            {projects.link[language][0]} <HiChevronDown size={24} />
          </a>
          <a
            href={project.refSite}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center duration-200 hover:scale-105"
          >
            {projects.link[language][1]} <HiMiniArrowUpRight id="arr" size={24} />
          </a>
        </p>
        {project.vpn && (
          <span className="absolute bottom-0 text-xs text-sky-800 md:px-1 md:text-sm">
            {projects.note[language]}
          </span>
        )}
      </div>
    </div>
  );
}

export default Project;