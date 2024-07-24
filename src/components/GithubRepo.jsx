import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "../context/TextContext";

function GithubRepo({ github }) {
  const { language } = useLanguage();

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={github}
      className="absolute right-2 top-3 col-span-4 col-start-1 mb-2 flex items-center text-xs duration-200 hover:scale-105 md:text-base lg:-right-6"
    >
      <img src="./github.svg" alt="github" className="mr-1" />
      <p>{language === "en" ? "Github Repository" : "GitHub 仓库"}</p>
      <HiMiniArrowUpRight id="arr" size={22} />
    </a>
  );
}

export default GithubRepo;
