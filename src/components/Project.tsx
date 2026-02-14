import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { LuTags } from "react-icons/lu";

interface Props {
  title: string;
  link?: string;
  image: string;
  description: string;
  tags: string[];
  alive: boolean;
}

const Project = ({ title, link, image, description, tags, alive }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="group z-10 flex flex-col gap-5 rounded-xl overflow-hidden border-2 border-indigo-500/20 bg-linear-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-md hover:from-indigo-500/20 hover:to-blue-500/20 hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-gray-900/30 shadow-lg">
      {/* Project Image */}
      <div className="relative w-full h-fit">
        <img
          src={image}
          alt={t("projects.project_image")}
          className="bg-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
        />
        <div
          className={`absolute top-3 right-3 ${alive ? "bg-green-500/15" : "bg-red-500/15"} rounded-full px-2 py-1`}
        >
          <p
            className={`text-xs ${alive ? "text-green-500" : "text-red-500"} font-bold`}
          >
            {alive ? t("projects.alive") : t("projects.lifeless")}
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col gap-4 p-3">
        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-100">{title}</h3>
        {/* Description */}
        <p className="text-sm font-semibold text-neutral-100/80">
          {description}
        </p>
        {/* Tags */}
        <div className="flex flex-row gap-2 items-center text-neutral-100/50">
          <LuTags />
          <p>{t("projects.tags")}</p>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          {tags &&
            tags.map((tag, _) => (
              <span className="text-xs font-bold text-white px-3 py-1 rounded-full border border-blue-500/60 bg-blue-500/10 backdrop-blur-md">
                {tag}
              </span>
            ))}
        </div>
        {/* Project Link */}
        {link && (
          <div className="w-full flex justify-end">
            <div className="group flex flex-row gap-3 items-center text-neutral-100/60 hover:text-neutral-100 cursor-pointer transition-all duration-150 ease-in-out">
              <a href={link} aria-label={t("projects.view")}>
                {t("projects.view")}
              </a>
              <FaArrowRight className="group-hover:animate-slide" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
