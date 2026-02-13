import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group
        fixed bottom-4 right-4 md:bottom-8 md:right-8 z-30
        p-3 rounded-full bg-linear-to-br
        from-blue-500 to-indigo-600 text-white
        shadow-lg cursor-pointer
        hover:scale-110 active:scale-95
        transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <IoIosArrowUp size={20} />
      <div className="absolute bottom-0 right-0 p-3 w-11 h-11 rounded-full bg-indigo-400/60 animate-ping group-hover:hidden" />
    </button>
  );
};

export default ScrollToTop;
