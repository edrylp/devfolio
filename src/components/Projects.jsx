import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard.jsx";
import FeaturedCard from "./FeaturedCard.jsx";
import SectionHeader from "./SectionHeader";

const featuredProjects = projects.filter((project) => project.featured);
const regularProjects = projects.filter((project) => !project.featured);

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-10">
      <div>
        <SectionHeader
          title="Selected Work"
          subtitle="A curated list of projects I created"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 ">
        {featuredProjects.map((project) => (
          <div key={project.id}>
            <FeaturedCard project={project} />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
        {regularProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
