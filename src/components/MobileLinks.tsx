import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

interface Props {
  setToggledMenu: (toggled: boolean) => void;
}

const MobileLinks = ({ setToggledMenu }: Props) => {
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setToggledMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setToggledMenu(false);
  };

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, translateX: 30 }}
      animate={{
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.1, delay: 0.1 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.1, delay: 0.1 } }}
      className="md:hidden fixed top-0 right-0 w-75 h-screen z-40 flex justify-center items-center flex-col gap-3 text-sm bg-neutral-600/20 backdrop-blur-2xl"
    >
      <button
        onClick={() => setToggledMenu(false)}
        className="absolute top-5 right-5 hover:text-red-500 transition-all ease-in-out duration-200 cursor-pointer p-2 border border-red-500/40 bg-red-500/20 rounded-md"
      >
        <RiCloseLargeFill />
      </button>

      <a
        href="#"
        onClick={closeMenu}
        className=" hover:text-indigo-500 transition-all duration-200"
      >
        {t("navbar.home")}
      </a>
      <a
        href="#about"
        onClick={closeMenu}
        className=" hover:text-indigo-500 transition-all duration-200"
      >
        {t("navbar.about")}
      </a>
      <a
        href="#skills"
        onClick={closeMenu}
        className=" hover:text-indigo-500 transition-all duration-200"
      >
        {t("navbar.skills")}
      </a>
      <a
        href="#projects"
        onClick={closeMenu}
        className=" hover:text-indigo-500 transition-all duration-200"
      >
        {t("navbar.projects")}
      </a>
      <a
        href="#contact"
        onClick={closeMenu}
        className=" hover:text-indigo-500 transition-all duration-200"
      >
        {t("navbar.contact")}
      </a>
    </motion.div>
  );
};

export default MobileLinks;
