import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Store current scroll position
    const scrollY = window.scrollY;
    // Navigate to project detail
    navigate(`/projects/${project.id}`);
    // Restore scroll position after navigation
    setTimeout(() => window.scrollTo(0, scrollY), 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <a
        href={`/projects/${project.id}`}
        onClick={handleClick}
        className="group block glass-card rounded-lg overflow-hidden hover:shadow-gold transition-all duration-500 cursor-pointer"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            width={400}
            height={550}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-gold-gradient text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
            {project.status}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </div>
          <p className="text-primary font-body font-bold text-lg">{project.price}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
