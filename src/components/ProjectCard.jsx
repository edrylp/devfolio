import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative mx-auto flex h-full w-full flex-col overflow-hidden rounded-xl bg-background p-[1px] transition-all duration-300 hover:shadow-xl">

      {/* Card */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[11px] bg-background">
        {/* Card Image */}
        <div className="relative aspect-16/10 overflow-hidden bg-background">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Bottom Image Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-3 bg-linear-to-t from-background to-transparent" />
        </div>

        {/* Card Content */}
        <div className="flex flex-1 flex-col p-6">

          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-inconsolata text-xs font-medium text-text"
                >
                  {tech}
                </span>
              ))}
          </div>

          {/* Title */}
          <h3 className="font-figtree text-xl font-semibold leading-none tracking-tight text-primary">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="mt-2.5 flex-1 font-figtree text-sm leading-relaxed text-text/70">
            {project.description}
          </p>
        </div>

      {/* Buttons */}
      <div className="mt-auto flex gap-4 p-6 pt-0">
        <a
          className="button-secondary w-full gap-2 px-4 py-2 font-semibold"
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
          <FaGithub  />
        </a>

        <a
          className="button-primary w-full gap-1 px-4 py-2 font-semibold"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
          <ArrowUpRight />
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard

