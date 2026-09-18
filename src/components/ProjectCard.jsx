const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-md border border-[#3d353d] bg-[#19181a] transition-all duration-300 hover:border-[#e8a8e8] hover:shadow-[0_10px_30px_rgba(232,168,232,0.08)]">
      {/* Project Image */}
      <div className="overflow-hidden border-b border-[#3d353d] bg-[#111113]">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="p-5">
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#e8a8e8]">
          {project.type}
        </p>

        <h3 className="mb-2 text-base font-medium text-white">
          {project.title}
        </h3>

        <p className="mb-4 text-xs leading-5 text-gray-500">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#514851] px-2.5 py-1 text-[10px] text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 text-xs">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 transition-colors hover:text-[#e8a8e8]"
          >
            Live Demo ↗
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 transition-colors hover:text-[#e8a8e8]"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
