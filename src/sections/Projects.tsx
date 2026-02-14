import Project from "../components/Project";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-8 bg-linear-to-bl from-slate-900 via-blue-950 to-slate-900 z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute animate-pulse top-[15%] left-[20%]  w-60 h-60 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute animate-bounce bottom-[20%] right-[10%] w-70 h-70 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Projects Content */}
      <div className="container mx-auto">
        {/* Section Title */}
        <SectionTitle
          title={t("projects.title")}
          subtitle={t("projects.subtitle").toUpperCase()}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
          <Project
            title="Hotelier"
            description="A small project that I have worked on it in the end of the study in my ALX of Africa School's journey"
            image="./images/project.jpg"
            tags={[
              "React",
              "Tailwindcss",
              "TypeScript",
              "NodeJS",
              "MongoDB",
              "Express",
              "Stripe",
            ]}
            alive={true}
          />
          <Project
            title="Hotelier"
            description="A small project that I have worked on it in the end of the study in my ALX of Africa School's journey"
            image="./images/project.jpg"
            tags={[
              "React",
              "Tailwindcss",
              "TypeScript",
              "NodeJS",
              "MongoDB",
              "Express",
              "Stripe",
            ]}
            alive={true}
          />
          <Project
            title="Hotelier"
            description="A small project that I have worked on it in the end of the study in my ALX of Africa School's journey"
            image="./images/project.jpg"
            tags={[
              "React",
              "Tailwindcss",
              "TypeScript",
              "NodeJS",
              "MongoDB",
              "Express",
              "Stripe",
            ]}
            alive={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
