import { useState, useEffect } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const ScrollDownIcon = () => {
  const { pathname } = useLocation();
  const [isScrollDownVisible, setIsScrollDownVisible] = useState(true);

  useEffect(() => {
    const bottomElement = document.getElementById("bottom");

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsScrollDownVisible(false);
        } else {
          setIsScrollDownVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (bottomElement) {
      observer.observe(bottomElement);
    }

    return () => {
      if (bottomElement) {
        observer.unobserve(bottomElement);
      }
    };
  }, []);

  const isHiddenIcon =
    !isScrollDownVisible || pathname === "/gallery" || pathname === "/contact";

  return (
    <IoArrowDownCircleOutline
      className={`scroll-down ${isHiddenIcon ? "hidden" : ""}`}
      color="white"
      size={30}
    />
  );
};

export default ScrollDownIcon;
