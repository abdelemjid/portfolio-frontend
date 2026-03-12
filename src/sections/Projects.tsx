import { useQuery } from "@tanstack/react-query";
import Project from "../components/Project";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";
import * as api from "../utils/api-client";
import { useEffect } from "react";
import { toast } from "sonner";
import type { ProjectType } from "../types/Project";
import { AnimatedSlideCard } from "../components/AnimatedSlideCard";

const Projects = () => {
  const { t } = useTranslation();

  const {
    data: projects,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["projects"], queryFn: api.getProjects });

  useEffect(() => {
    if (isError && !isLoading && error) {
      toast.error("Projects", { description: "Failed to fetch projects!" });
    }
  }, [isLoading, isError, error]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-8 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-95 h-95 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-95 h-95 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Projects Content */}
      <div className="container mx-auto">
        {/* Section Title */}
        <SectionTitle
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
          {projects &&
            projects.map((project: ProjectType, index: number) => (
              <AnimatedSlideCard direction="top" delay={100 * index}>
                <Project
                  key={project?._id}
                  title={project?.name}
                  description={project?.description}
                  image={project?.image}
                  tags={project?.technologies?.toString().split(",")}
                  alive={project?.alive}
                  link={project?.link}
                />
              </AnimatedSlideCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
