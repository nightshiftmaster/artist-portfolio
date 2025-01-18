import { useState, useEffect, useRef } from "react";
import i18next from "../utils/i18.n";
import { CiGlobe } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

const LanguageSelect = () => {
  const [isOpen, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const languageContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageContainerRef.current &&
        !languageContainerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={languageContainerRef}>
      <div className="language-container" onClick={() => setOpen(!isOpen)}>
        <div className="language-selector">
          <CiGlobe className="responsive-icon" />
          <FaCaretDown />
        </div>

        <img
          className="national-flag current"
          src={
            lang === "EN"
              ? "./flags-icons/united-kingdom.png"
              : "./flags-icons/israel.png"
          }
          alt=""
        />
      </div>
      <div className={`language-list-window ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            className="flag-list-item"
            onClick={() => {
              setOpen(false);
              setLang("EN");
              i18next.changeLanguage("en");
            }}
          >
            <img
              className="national-flag"
              src="./flags-icons/united-kingdom.png"
              alt=""
            />
            <p>English</p>
          </div>

          <div
            className="flag-list-item"
            onClick={() => {
              setOpen(false);
              setLang("HEB");
              i18next.changeLanguage("heb");
            }}
          >
            <img
              className="national-flag"
              src="./flags-icons/israel.png"
              alt=""
            />
            <p>עברית</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
