import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const targetElement = document.getElementById("top");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    const timeout = setTimeout(scrollToTop, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
