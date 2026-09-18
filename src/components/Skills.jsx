import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, category: "Development" },
    { name: "CSS", icon: <FaCss3Alt />, category: "Development" },
    { name: "JavaScript", icon: <FaJs />, category: "Development" },
    { name: "React", icon: <FaReact />, category: "Development" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Development" },
    { name: "Git", icon: <FaGitAlt />, category: "Tools" },
    { name: "GitHub", icon: <FaGithub />, category: "Tools" },
    { name: "Figma", icon: <FaFigma />, category: "Design"},
  ];

  return (
    <section className="w-full bg-[#171719] px-6 pb-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">

        <div>
          <p className="mb-2 text-[10px] tracking-[0.3em] text-gray-500">
            SKILLS
          </p>

          <h2 className="mb-5 text-2xl font-medium text-white">
            My <span className="text-[#e8a8e8]">toolkit.</span>
          </h2>

          <p className="max-w-md text-xs leading-6 text-gray-500">
            Technologies and tools I'm using to turn ideas into interactive
            experiences.
          </p>
        </div>


        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill)=> (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-md border border-[#403840] bg-[#1a191b] px-4 py-3 transition-all duration-300 hover:border-[#e8a8e8] hover:bg-[#e8a8e8] hover:text-[#151315]"
            >
              <span className="text-lg text-[#e8a8e8] transition-colors group-hover:text-[#473347]">
                {skill.icon}
              </span>

              <div>
                <h3 className="text-xs font-medium" >
                  {skill.name}
                </h3>

                <p className="text-[9px] text-gray-500 transition-colors group-hover:text-[#473347]">
                  {skill.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;