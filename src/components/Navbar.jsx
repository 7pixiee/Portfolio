import logo from "../assets/pixie-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0d0d0f]/90 backdrop-blur-md pr-10">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between ">
        <a href="#home">
          <img className="h-25 w-auto" src={logo} alt="Pixie logo" />
        </a>
        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a
            href="#home"
            onClick={() => setActiveLink("home")}
            className={
              activeLink === "home"
                ? "text-[#e8a8e8]"
                : "text-gray-400 transition-all duration-300 hover:text-[#e8a8e8]"
            }
          >
            Home
          </a>

          <a
            href="#projects"
            onClick={() => setActiveLink("projects")}
            className={
              activeLink === "projects"
                ? "text-[#e8a8e8]"
                : "text-gray-400 transition-all duration-300 hover:text-[#e8a8e8]"
            }
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={() => setActiveLink("about")}
            className={
              activeLink === "about"
                ? "text-[#e8a8e8]"
                : "text-gray-400 transition-all duration-300 hover:text-[#e8a8e8]"
            }
          >
            About me
          </a>

          <a
            href="#contact"
            onClick={() => setActiveLink("contact")}
            className={
              activeLink === "contact"
                ? "text-[#e8a8e8]"
                : "text-gray-400 transition-all duration-300 hover:text-[#e8a8e8]"
            }
          >
            Contact me
          </a>
        </div>

        <a
          href="/resume.pdf"
          className="inline-block bg-[#e8a8e8] px-5 py-2.5 text-xs font-medium text-[#151315] transition-all duration-300 hover:bg-[#f3c4f3] hover:shadow-[0_0_20px_rgba(232,168,232,0.25)]"
        >
          View Resume ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
