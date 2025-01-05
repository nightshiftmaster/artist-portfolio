import { useState } from "react";
import i18next from "../assets/i18.n";
import { CiGlobe } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

const LanguageSelect = () => {
  const [isOpen, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", gap: "13px" }}
        onClick={() => setOpen(!isOpen)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            cursor: "pointer",
          }}
        >
          <CiGlobe size={30} />
          <FaCaretDown />
        </div>
        {lang === "EN" ? (
          <img
            className="national-flag"
            onClick={() => {
              setOpen(false);
              setLang("EN");
              i18next.changeLanguage("en");
            }}
            src="./flags-icons/united-kingdom.png"
            alt=""
          />
        ) : (
          <img
            className="national-flag"
            src="./flags-icons/israel.png"
            alt=""
            onClick={() => {
              setOpen(false);
              setLang("HEB");
              i18next.changeLanguage("heb");
            }}
          />
        )}
      </div>
      <div
        style={{
          display: isOpen ? "flex" : "none",
          position: "absolute",
          backgroundColor: "gray",
          borderRadius: "8px",
          padding: "10px",
          right: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              className="national-flag"
              onClick={() => {
                setOpen(false);
                setLang("EN");
                i18next.changeLanguage("en");
              }}
              src="./flags-icons/united-kingdom.png"
              alt=""
            />
            <p>English</p>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <img
              className="national-flag"
              src="./flags-icons/israel.png"
              alt=""
              onClick={() => {
                setOpen(false);
                setLang("HEB");
                i18next.changeLanguage("heb");
              }}
            />
            <p>עברית</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
