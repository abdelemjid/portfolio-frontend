import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileLinks from "./MobileLinks";
import { AnimatePresence, motion } from "motion/react";
import LangSelector from "./LangSelector";

const Navbar = () => {
  const { t } = useTranslation();

  const [toggledMenu, setToggledMenu] = useState(false);

  useEffect(() => {
    if (toggledMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [toggledMenu]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{
          opacity: 1,
          translateY: 0,
          transition: { delay: 0.2, duration: 0.2 },
        }}
        className="fixed top-0 left-0 z-30 w-full py-3 bg-white/6 backdrop-blur-md border-b-2 border-white/2"
      >
        <div className="container w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-row gap-1">
            <p className="text-lg font-semibold">
              <a
                href="/"
                className="hover:text-indigo-500 transition-all duration-200"
              >
                Es. Abdelemjid
              </a>
            </p>
          </div>
          <div className="flex flex-row gap-3">
            {/* Language Selector */}
            <LangSelector />
            {/* Laptop */}
            <div className="hidden md:flex w-fit justify-center items-center flex-row gap-3 text-sm">
              <a
                href="#"
                className=" hover:text-indigo-500 transition-all duration-200"
              >
                {t("navbar.home")}
              </a>
              <a
                href="#about"
                className=" hover:text-indigo-500 transition-all duration-200"
              >
                {t("navbar.about")}
              </a>
              <a
                href="#skills"
                className=" hover:text-indigo-500 transition-all duration-200"
              >
                {t("navbar.skills")}
              </a>
              <a
                href="#projects"
                className=" hover:text-indigo-500 transition-all duration-200"
              >
                {t("navbar.projects")}
              </a>
              <a
                href="#contact"
                className=" hover:text-indigo-500 transition-all duration-200"
              >
                {t("navbar.contact")}
              </a>
            </div>
          </div>
          {/* Burger Icon */}
          <button
            onClick={() => setToggledMenu(true)}
            className="md:hidden cursor-pointer p-2 rounded-md bg-neutral-100/10 border border-neutral-100/20 hover:text-indigo-500 transition-all ease-in-out duration-200"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </motion.div>

      {/* Mobile */}
      <AnimatePresence>
        {toggledMenu && <MobileLinks setToggledMenu={setToggledMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
