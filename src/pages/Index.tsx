import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Award, Building } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "2,500+", label: "Happy Customers" },
  { icon: Building, value: "25+", label: "Projects Delivered" },
  { icon: Shield, value: "100%", label: "Clear Titles" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Indra Properties premium open plots"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Premium Open Plots & Land Investments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6"
          >
            We Turn Your Dreams
            <br />
            <span className="text-gold-gradient">Into Reality</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground font-body max-w-xl mx-auto mb-10 text-base md:text-lg"
          >
            Invest in DTCP-approved open plots at prime locations with
            world-class amenities and guaranteed returns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-body font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20Indra%20Properties%20plots."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-primary px-8 py-3.5 rounded-md font-body font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Contact on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Welcome to Indra Properties"
            subtitle="With over 15 years of trust and excellence, we are one of the leading real estate developers specializing in premium open plots across Telangana."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-lg p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm font-body mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Premium Projects"
            subtitle="Explore handpicked open plot developments in Telangana's fastest-growing corridors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-gold text-primary px-8 py-3 rounded-md font-body font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Ready to Invest in
                <br />
                <span className="text-gold-gradient">Your Future?</span>
              </h2>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Don't miss out on Telangana's fastest appreciating land. Book a
                free site visit today and take the first step toward your dream
                property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919876543210"
                  className="bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm text-center"
                >
                  📞 Call: +91 98765 43210
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold text-primary px-6 py-3 rounded-md font-body font-semibold text-sm text-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
