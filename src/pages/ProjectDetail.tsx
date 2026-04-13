import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Phone, CheckCircle, Grid3X3, BarChart3 } from "lucide-react";
import { projects } from "@/data/projects";
import EnquiryForm from "@/components/EnquiryForm";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display text-foreground mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-primary font-body hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const galleryLinks = Array.isArray(project.gallery)
    ? project.gallery.map((_, index) => ({
        label: `Phase ${index + 1}`,
        href: `/Sai-highway-dreamhouses-phase-${index + 1}`,
      }))
    : [{ label: "View Gallery", href: project.gallery }];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative w-screen -ml-[calc((100vw-100%)/2)] h-[60vh] min-h-[420px] md:h-screen">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 z-10 flex flex-col justify-start">
          <div className="container mx-auto px-4 pt-6 sm:px-6 sm:pt-8 md:px-10 md:pt-12 lg:px-12">
            <Link
              to="/projects"
              className="mb-4 inline-flex max-w-full items-center gap-2 text-sm font-body font-semibold text-white hover:underline sm:mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="mb-3 inline-flex max-w-full bg-gold-gradient px-3 py-1 text-xs font-body font-bold text-primary-foreground rounded-full">
                {project.status}
              </div>
              <h1 className="mb-3 text-3xl font-display font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {project.name}
              </h1>
              <div className="mb-2 inline-flex max-w-full flex-wrap items-center gap-2 bg-black/35 px-3 py-2 text-xs font-body font-bold text-white backdrop-blur-sm sm:px-4">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="min-w-0 break-words">{project.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {galleryLinks.length > 0 && (
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {galleryLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-gradient px-5 py-3 text-sm font-body font-semibold text-primary-foreground transition-all hover:shadow-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
              
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground font-body leading-relaxed">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="glass-card rounded-lg p-4 text-center">
                    <Grid3X3 className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-body">Plot Sizes</p>
                    <p className="text-sm font-semibold text-foreground font-body">{project.plotSizes}</p>
                  </div>
                  <div className="glass-card rounded-lg p-4 text-center">
                    <BarChart3 className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-body">Total Plots</p>
                    <p className="text-sm font-semibold text-foreground font-body">{project.totalPlots}</p>
                  </div>
                  <div className="glass-card rounded-lg p-4 text-center">
                    <p className="text-primary text-lg font-bold font-display mb-1">₹</p>
                    <p className="text-xs text-muted-foreground font-body">Starting Price</p>
                    <p className="text-sm font-semibold text-foreground font-body">{project.price}</p>
                  </div>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground font-body text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location Advantages */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Location Advantages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.locationAdvantages.map((l) => (
                    <div key={l} className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground font-body text-sm">{l}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Location Map</h2>
                <div className="rounded-lg overflow-hidden border border-border aspect-video">
                  <iframe
                    src={project.mapEmbed}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${project.name} location`}
                  />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <EnquiryForm projectName={project.name} />

              <div className="glass-card rounded-lg p-6 space-y-4">
                <h3 className="font-display text-lg font-semibold text-foreground">Quick Connect</h3>
                <a
                  href="tel:+919885353637"
                  className="flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground py-3 rounded-md font-body font-semibold text-sm w-full"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href={`https://wa.me/919885353637?text=${encodeURIComponent(`Hi, I'm interested in ${project.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gold text-primary py-3 rounded-md font-body font-semibold text-sm w-full hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
