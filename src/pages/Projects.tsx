import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our <span className="text-gold-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Discover premium open plot opportunities in Andra Pradesh's most promising locations.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Explore Our Developments"
            subtitle="Each project is carefully selected for location advantage, legal clarity, and future growth potential."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
