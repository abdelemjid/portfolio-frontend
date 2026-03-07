import SectionTitle from "../components/SectionTitle";
import Skill from "../components/Skill";
import FieldTitle from "../components/FieldTitle";
import * as api from "../utils/api-client";
import { useTranslation } from "react-i18next";
import * as FaIcons from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

const Skills = () => {
  const { t } = useTranslation();

  // categories
  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.getEndPoint("categories"),
  });

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error("Skills Error", { description: "Error fetching skills!" });
    }
  }, [isError, error]);

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-8 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 ">
        <div className="absolute animate-pulse top-25 left-15 w-60 h-60 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute animate-bounce bottom-15 right-15 w-70 h-70 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Skills Content */}
      <div className="container mx-auto">
        {/* Section Title */}
        <SectionTitle
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        {categories &&
          categories.map((category: any) => {
            const categoryIcon = FaIcons[category.icon as keyof typeof FaIcons];

            return (
              <>
                {/* Subsection Title */}
                <FieldTitle fieldTitle={category.name} Icon={categoryIcon} />

                {/* Skills */}
                <div className="grid md:grid-cols-2 gap-5">
                  {category &&
                    category.skills?.map((skill: any) => {
                      const skillIcon =
                        FaIcons[skill.icon as keyof typeof FaIcons];

                      return (
                        <Skill
                          title={skill?.name}
                          progress={skill?.proficiency}
                          Icon={skillIcon}
                        />
                      );
                    })}
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
};

export default Skills;
