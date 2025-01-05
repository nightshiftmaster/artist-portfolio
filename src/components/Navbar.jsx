import { Link } from "react-router-dom";
import { useState } from "react";
import { links } from "../assets/constants";
import Socials from "./Socials";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [active, setActive] = useState("");
  const { t } = useTranslation();
  return (
    <div className="nav">
      <ul className="nav-container">
        {links.map((link, i) => {
          return (
            <Link
              key={i}
              className={`nav-element ${i === active ? "active" : ""}`}
              to={link.to}
              onClick={() => {
                setActive(i);
              }}
            >
              <li>{t(`navs.${link.name.toLowerCase()}`)}</li>
            </Link>
          );
        })}
      </ul>

      <div className="socials-nav">
        <Socials />

        <LanguageSelect />
      </div>
    </div>
  );
};

export default Navbar;
