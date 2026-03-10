import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import { useQuery } from "@tanstack/react-query";
import * as api from "../utils/api-client";
import { useEffect } from "react";
import { toast } from "sonner";

const Education = () => {
  const { t } = useTranslation();

  const {
    data: educationData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["education"],
    queryFn: () => api.getEndPoint("education"),
  });

  useEffect(() => {
    if (!isLoading && isError && error) {
      toast.error("Education Timeline", {
        description: "Error fetching education!",
      });
    }
  }, [isError, error]);

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen py-8 bg-linear-to-bl from-slate-900 via-blue-950 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 ">
        <div className="absolute top-25 left-15 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-15 right-15 w-120 h-120 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Education Container */}
      <div className="container mx-auto relative">
        {/* Section Title */}
        <SectionTitle
          title={t("education.title")}
          subtitle={t("education.subtitle")}
        />

        {/* Timeline */}
        <div className="relative my-10 flex flex-col gap-8">
          <Timeline data={educationData} />
        </div>
      </div>
    </section>
  );
};

export default Education;
