import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import { IoMdCode } from "react-icons/io";
import Skill from "../components/Skill";
import {
  FaCode,
  FaCss3,
  FaJava,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiAndroidstudio, SiGnubash, SiNginx } from "react-icons/si";
import {
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandPython,
  TbBrandTypescript,
} from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoBrowsersOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { SiExpress } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { LiaUserShieldSolid } from "react-icons/lia";
import { VscAzureDevops } from "react-icons/vsc";
import FieldTitle from "../components/FieldTitle";

const Skills = () => {
  const { t } = useTranslation();

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
          subtitle={t("skills.subtitle").toUpperCase()}
        />

        {/* Subsection Title */}
        <FieldTitle
          fieldTitle={t("skills.frontend")}
          Icon={IoBrowsersOutline}
        />

        {/* Frontend Skills */}
        <div className="grid md:grid-cols-2 gap-5">
          <Skill title="HTML" progress={85} Icon={IoMdCode} />
          <Skill title="CSS" progress={80} Icon={FaCss3} />
          <Skill title="JS" progress={88} Icon={FaNodeJs} />
          <Skill title="TS" progress={80} Icon={TbBrandTypescript} />
          <Skill title="React" progress={70} Icon={FaReact} />
          <Skill title="TailwindCSS" progress={75} Icon={RiTailwindCssFill} />
          <Skill title="NodeJS" progress={82} Icon={FaNode} />
        </div>

        {/* Subsection Title */}
        <FieldTitle fieldTitle={t("skills.backend")} Icon={CiServer} />

        {/* Backend Skills */}
        <div className="grid md:grid-cols-2 gap-5">
          <Skill title="NodeJS" progress={82} Icon={FaNode} />
          <Skill title="ExpressJS" progress={70} Icon={SiExpress} />
          <Skill title="API Integration" progress={81} Icon={FaCode} />
          <Skill
            title="Role Based Auth"
            progress={78}
            Icon={LiaUserShieldSolid}
          />
          <Skill title="" progress={81} Icon={FaCode} />
        </div>

        {/* Subsection Title */}
        <FieldTitle fieldTitle={t("skills.database")} Icon={FiDatabase} />

        {/* Database Skills */}
        <div className="grid md:grid-cols-2 gap-5">
          <Skill title="MongoDB" progress={79} Icon={TbBrandMongodb} />
          <Skill title="MySQL" progress={58} Icon={TbBrandMysql} />
        </div>

        {/* Subsection Title */}
        <FieldTitle fieldTitle={t("skills.devops")} Icon={VscAzureDevops} />

        {/* Database Skills */}
        <div className="grid md:grid-cols-2 gap-5">
          <Skill title="Nginx" progress={50} Icon={SiNginx} />
        </div>

        {/* Subsection Title */}
        <FieldTitle fieldTitle={t("skills.other_skills")} Icon={FaCode} />

        {/* Database Skills */}
        <div className="grid md:grid-cols-2 gap-5">
          <Skill title="C Language" progress={70} Icon={FaCode} />
          <Skill title="Java" progress={68} Icon={FaJava} />
          <Skill title="Python" progress={65} Icon={TbBrandPython} />
          <Skill title="Bash" progress={52} Icon={SiGnubash} />
          <Skill title="Android Studio" progress={65} Icon={SiAndroidstudio} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
