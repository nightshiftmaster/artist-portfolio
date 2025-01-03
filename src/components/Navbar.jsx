import { Link } from "react-router-dom";
import { useState } from "react";
import { links } from "../assets/constants";
import Socials from "./Socials";

const Navbar = () => {
  const [active, setActive] = useState("");
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
              <li>{link.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className="socials-nav">
        <Socials />
      </div>
    </div>
  );
};

export default Navbar;
