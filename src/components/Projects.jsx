import ProjectCard from "./ProjectCard";

import nyxflix from "../assets/projects/nyxflix.png";
import quietpaws from "../assets/projects/quietpaws.png";
import calculator from "../assets/projects/calculator.png";
import todo from "../assets/projects/to-do-list.png";

const Projects = () => {
  const projects = [
    {
      title: "NyxFlix",
      type: "Movie Discovery",
      description:
        "A movie discovery app where users can search for movies, explore genres, and save their favourites.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      image: nyxflix,
      live: "#",
      github: "https://github.com/7pixiee/movie-search-app",
    },

    {
      title: "QuietPaws",
      type: "Wellness Experience",
      description:
        "A playful wellness experience that combines mindful breaks and a cute cat-themed interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: quietpaws,
      live: "https://quietpaws.vercel.app",
      github: "https://github.com/7pixiee/QuietPaws",
    },

    {
      title: "Calculator",
      type: "Interactive Web App",
      description:
        "A responsive calculator with a clean interface and JavaScript-powered arithmetic operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: calculator,
      live: "https://7pixiee.github.io/Calculator",
      github: "https://github.com/7pixiee/Calculator",
    },

    {
      title: "To-do List",
      type: "Productivity App",
      description:
        "A simple to-do list app for adding, completing, and managing daily tasks.",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      image: todo,
      live: "https://7pixiee.github.io/To-Do-List",
      github: "https://github.com/7pixiee/To-Do-List",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#0d0d0f] px-6 py-20">
      <div className="mx-auto max-w-6xl">
    
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-gray-500">
            PORTFOLIO
          </p>

          <h2 className="text-2xl font-medium text-white">
            Featured <span className="text-[#e8a8e8]">projects.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="overflow-hidden mx-auto w-full max-w-252 ">
          <div className="flex w-max animate-projects gap-6">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="w-[320px] shrink-0"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
