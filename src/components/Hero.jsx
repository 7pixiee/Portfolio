import { TbBrandGithubFilled } from "react-icons/tb";
import {
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoDiscordAlt,
} from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-2xl text-center">

        <p className="mb-3 text-xs tracking-[0.3em] text-gray-500">
          HELLO
        </p>

        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          I'm{" "}
          <span className="text-[#e8a8e8]">
            Sumayya Belal
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
          A{" "}
          <span className="text-[#e8a8e8]">
            Creative Developer
          </span>{" "}
          turning ideas into playful, thoughtful, and interactive digital
          experiences through code and design.
        </p>
      </div>

      {/* Social links */}
      <div className="mt-8 flex gap-4">

        <a
          href="https://github.com/7pixiee"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8a8e8] transition-all duration-300 hover:shadow-[0_0_15px_rgba(232,168,232,0.4)]"
        >
          <TbBrandGithubFilled className="text-lg  bg-[#e8a8e8] text-black" />
        </a>

        <a
          href="mailto:sumayyabelal7@gmail.com"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8a8e8] transition-all duration-300 hover:shadow-[0_0_15px_rgba(232,168,232,0.4)]"
        >
          <BiLogoGmail className="text-lg bg-[#e8a8e8] text-black" />
        </a>

        <a
          href="https://linkedin.com/in/sumayyabelal7"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8a8e8] transition-all duration-300 hover:shadow-[0_0_15px_rgba(232,168,232,0.4)]"
        >
          <BiLogoLinkedin className="text-lg bg-[#e8a8e8] text-black" />
        </a>

        <a
          href="#contact"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8a8e8] transition-all duration-300 hover:shadow-[0_0_15px_rgba(232,168,232,0.4)]"
        >
          <BiLogoDiscordAlt className="text-lg bg-[#e8a8e8] text-black" />
        </a>

      </div>
    </section>
  );
};

export default Hero;