import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { RiLinksFill } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { VscFlame } from "react-icons/vsc";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-10 border-t-2 border-neutral-100/6 bg-linear-to-br from-indigo-950 via-blue-950 to-neutral-900">
      <div className="container grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-5">
        {/* 1st Section */}
        <div className="flex flex-col gap-8">
          {/* Title & About */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Es. Abdelemjid</h2>
            <p className="text-sm max-w-95">{t("footer.about")}</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-1">
              <VscFlame size={20} />
              <h4 className="text-sm font-semibold">Follow Me</h4>
            </div>

            <div className="flex flex-row gap-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/essaidabdelemjid/"
                target="_blank"
                className="relative group p-1.5 rounded-md bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
              >
                <FaInstagram
                  size={25}
                  className="text-neutral-100/60 group-hover:text-pink-500 transition-all duration-150"
                />
              </a>
              {/* Facebook */}
              <a
                href="https://www.instagram.com/essaidabdelemjid/"
                target="_blank"
                className="relative group p-1.5 rounded-md bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
              >
                <FiFacebook
                  size={25}
                  className="text-neutral-100/60 group-hover:text-blue-500 transition-all duration-150"
                />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="relative group p-1.5 rounded-md bg-neutral-100/15 hover:bg-neutral-100/20 transition-all duration-150 hover:-translate-y-1 shadow-gray-900/30 shadow-md"
              >
                <PiLinkedinLogoLight
                  size={25}
                  className="text-neutral-100/60 group-hover:text-blue-400 transition-all duration-150"
                />
              </a>
            </div>
          </div>

          {/* Fiverr */}
          <div className="flex flex-row gap-5 items-center p-3 rounded-lg shadow-gray-950/30 shadow-lg border border-green-500/30 bg-green-600/15 backdrop-blur-md">
            <div className="w-3 h-3 rounded-full bg-green-600" />
            <div className="w-full flex flex-row gap-5 justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-green-500 text-sm font-semibold">
                  {t("footer.available")}
                </h3>
                <p className="text-xs text-neutral-100/70">
                  {t("footer.time")}
                </p>
              </div>

              <a
                href="https://www.fiverr.com/s/jjD81d9"
                className="flex flex-row gap-2 justify-center items-center cursor-pointer rounded-md shadow-gray-950/80 shadow-md bg-neutral-100/80 px-4 py-1 text-neutral-950 hover:text-green-600 transition-all duration-150 ease-in-out hover:animate-pulse"
              >
                <TbBrandFiverr size={20} />
                <span className="text-sm font-semibold">
                  {t("footer.fiverr")}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex flex-row gap-5 justify-between md:justify-evenly">
          {/* 1st Column */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-row gap-2 items-center">
              <RiLinksFill size={20} />
              <span className="font-semibold">{t("footer.quick")}</span>
            </div>

            {/* Quick Links */}
            <ul className="flex flex-col gap-3">
              {/* Home */}
              <li className="group flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-150 ease-in-out">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60 group-hover:w-2 group-hover:h-2 group-hover:bg-blue-400 transition-all duration-150 ease-in-out" />
                <a href="#" className="text-sm">
                  {t("navbar.home")}
                </a>
              </li>
              {/* About */}
              <li className="group flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-150 ease-in-out">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60 group-hover:w-2 group-hover:h-2 group-hover:bg-blue-400 transition-all duration-150 ease-in-out" />
                <a href="#about" className="text-sm">
                  {t("navbar.about")}
                </a>
              </li>
              {/* Skills */}
              <li className="group flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-150 ease-in-out">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60 group-hover:w-2 group-hover:h-2 group-hover:bg-blue-400 transition-all duration-150 ease-in-out" />
                <a href="#skills" className="text-sm">
                  {t("navbar.skills")}
                </a>
              </li>
              {/* Projects */}
              <li className="group flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-150 ease-in-out">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60 group-hover:w-2 group-hover:h-2 group-hover:bg-blue-400 transition-all duration-150 ease-in-out" />
                <a href="#projects" className="text-sm">
                  {t("navbar.projects")}
                </a>
              </li>
              {/* Contact */}
              <li className="group flex flex-row gap-2 items-center hover:text-blue-400 transition-all duration-150 ease-in-out">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60 group-hover:w-2 group-hover:h-2 group-hover:bg-blue-400 transition-all duration-150 ease-in-out" />
                <a href="#contact" className="text-sm">
                  {t("navbar.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd Column */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-row gap-2 items-center">
              <MdMiscellaneousServices size={20} />
              <span className="font-semibold">{t("footer.services")}</span>
            </div>

            {/* Services */}
            <ul className="flex flex-col gap-3">
              {/* Front End */}
              <li className="flex flex-row gap-2 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60" />
                <span className="text-sm">{t("footer.front")}</span>
              </li>
              {/* Back End */}
              <li className="flex flex-row gap-2 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60" />
                <span className="text-sm">{t("footer.back")}</span>
              </li>
              {/* API Integration */}
              <li className="flex flex-row gap-2 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-100/60" />
                <span className="text-sm">{t("footer.api")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-px my-10 bg-linear-to-r from-transparent via-indigo-600 to-transparent"></div>

      {/* Copy Rights */}
      <div className="container flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* 1st Column */}
        <div className="w-full flex flex-col gap-1">
          <span className="text-sm font-semibold text-neutral-100/60">
            &copy;
            {` ${new Date().getFullYear()} `}
            <span className="text-neutral-100">Es. Abdelemjid</span>
            {` ${t("footer.all_rights")}`}
          </span>
          <span className="text-xs text-neutral-100/60">
            {t("footer.built")}
          </span>
        </div>
        {/* 2nd Column */}
        <div className="w-full flex flex-col gap-2">
          <span className="text-sm">{t("footer.created")}</span>
          <ul className="flex flex-row gap-1 flex-wrap">
            <li className="rounded-md px-2 py-1 border border-gray-300/30 bg-neutral-100/10 text-xs">
              React
            </li>
            <li className="rounded-md px-2 py-1 border border-gray-300/30 bg-neutral-100/10 text-xs">
              TailwindCSS
            </li>
            <li className="rounded-md px-2 py-1 border border-gray-300/30 bg-neutral-100/10 text-xs">
              Motion
            </li>
            <li className="rounded-md px-2 py-1 border border-gray-300/30 bg-neutral-100/10 text-xs">
              NodeJS
            </li>
            <li className="rounded-md px-2 py-1 border border-gray-300/30 bg-neutral-100/10 text-xs">
              Express
            </li>
            <li className="rounded-md px-2 py-1 border border-gray-300/30 bg-neutral-100/10 text-xs">
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
