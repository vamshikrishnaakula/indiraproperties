import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Users, Award, Building, Search, MapPin, Home,
  Handshake, FileCheck, Eye, TrendingUp, ChevronRight, Star, HelpCircle,
} from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
import heroBg from "@/assets/main-video-DFRO3I1J.mp4";
import herowhiteBg from "@/assets/vid1-BZS_rmrF.mp4";
import brochurePdf from "@/assets/Sai Highway Dream Houses _ Brochure Final V (1).pdf";
import { projects } from "@/data/projects";
// import { projects  } from "@/data/mainprojects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import StatCounter from "@/components/StatCounter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { icon: Users, value: "1500+", label: "Happy Customers" },
  { icon: Building, value: "25+", label: "Projects Delivered" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Clear Titles" },
];

const services = [
  { icon: Search, title: "Plot Consultation", desc: "We understand your requirements and recommend the best open plots based on budget, location, and investment goals." },
  { icon: Eye, title: "Site Visit Assistance", desc: "We arrange guided site visits so you can explore projects and evaluate options before making decisions." },
  { icon: FileCheck, title: "Legal & Title Verification", desc: "Complete information about DTCP approvals, title clearance, land documentation, and legal compliance." },
  { icon: Handshake, title: "End-to-End Buying Support", desc: "From plot selection to registration, our team ensures a smooth and hassle-free buying experience." },
  { icon: TrendingUp, title: "Investment Advisory", desc: "We help investors identify high-growth corridors and future hotspots in Andra Pradesh for maximum ROI." },
  { icon: Home, title: "Post-Sale Support", desc: "Continued assistance with construction guidance, resale support, and property management after purchase." },
];

const whyChoose = [
  "100% DTCP & RERA Approved Projects",
  "Transparent & Clear Title Documentation",
  "15+ Years of Industry Experience",
  "Trusted by 2,500+ Happy Families",
  "Prime Locations with High Appreciation",
  "World-Class Infrastructure & Amenities",
  "Professional Property Advisors",
];

const investmentZones = [
  { name: "Vizag", growth: "Very High", roi: "15-20%" },
  { name: "Kandukur", growth: "High", roi: "12-16%" },
  { name: "Amaravathi", growth: "High", roi: "12-15%" },
  { name: "Srisailam Highway", growth: "Emerging", roi: "10-15%" },
  { name: "Chillakuru Highway", growth: "Very High", roi: "14-18%" },
  { name: "Guntur", growth: "Moderate", roi: "8-12%" },
];

const processSteps = [
  { num: "01", title: "Understanding Requirement", desc: "We listen to your needs, budget, and preferences." },
  { num: "02", title: "Plot Shortlisting", desc: "We curate the best options matching your criteria." },
  { num: "03", title: "Project Explanation", desc: "Detailed insights on approvals, amenities, and pricing." },
  { num: "04", title: "Site Visit", desc: "Guided visits to explore projects firsthand." },
  { num: "05", title: "Documentation Support", desc: "We handle all paperwork and legal verification." },
  { num: "06", title: "Registration & Handover", desc: "Complete booking and registration assistance." },
];

const testimonials = [
  {
    text: "Indra Properties helped us find the perfect plot near Vizag. Their guidance made the process very easy and stress-free. Highly recommended!",
    name: "Koti kumar",
    location: "Nellore",
  },
  {
    text: "Very transparent dealings and excellent infrastructure in their projects. We invested in Indra Golden City and are very happy with the appreciation.",
    name: "Priya Sharma",
    location: "Thirupathi",
  },
  {
    text: "The team was professional and supportive throughout. Clear titles, proper documentation — everything was smooth. Best real estate company in Andra Pradesh!",
    name: "Venkata Rao",
    location: "Kandukur",
  },
];

const faqs = [
  { q: "Are all your projects DTCP approved?", a: "Yes, all our projects are 100% DTCP approved with clear title documentation. We ensure complete legal compliance for every project." },
  { q: "What is the minimum investment required?", a: "Our plots start from ₹9,999/sq.yd onwards depending on the project location. We have options to suit various budgets." },
  { q: "Do you arrange site visits?", a: "Absolutely! We provide free guided site visits with pickup and drop facility from Chillakuru for all our projects." },
  { q: "What areas do your projects cover?", a: "We have projects across key growth corridors in Andra Pradesh including Vizag, Kandukur, Amaravathi, and Chillakuru Highway." },
  { q: "Do you help with bank loans?", a: "Yes, we have tie-ups with major banks and can assist with home/plot loan approvals for eligible customers." },
  { q: "What is the booking process?", a: "You can book a plot with a token advance. Our team handles all documentation, legal verification, and registration process end-to-end." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <video
          src={heroBg}
          alt="Indra Properties premium open plots"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
        /> */}
        <video
          src="https://res.cloudinary.com/dakwcewks/video/upload/Website_Banner_Video_wli0m7.mp4"
          alt="Indra Properties premium open plots"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
        />
        <div className="absolute left-4 top-4 z-20 rounded-full bg-black/30 px-4 py-3 text-left shadow-lg shadow-black/20 backdrop-blur-sm sm:left-6 sm:top-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/90">
            Sai Highway Dream Houses
          </p>
          <p className="mt-1 text-[10px] text-white/75">
            Best Land Investment Opportunity Near Gudur
          </p>
        </div>
        <div className="absolute inset-0 bg-background/55" />
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
            <a
              href={brochurePdf}
              download
              className="bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-md font-body font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Download Brochure
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 1 }}
              >
                <path d="M6 5h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4" />
                <path d="m14.5 10.75l-2.5 2.5l-2.5-2.5" />
              </svg>
            </a>
            <Link
              to="/contact"
              className="border border-gold text-primary px-8 py-3.5 rounded-md font-body font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Book Free Site Visit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-3"
              >
                Who We Are
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6"
              >
                Trusted Real Estate
                <br />
                <span className="text-gold-gradient">Developers in Andra Pradesh</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-body leading-relaxed mb-4"
              >
                With over 15 years of trust and excellence, Indra Properties is one of the leading
                real estate developers specializing in premium open plots across Andra Pradesh's
                fastest-growing corridors.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground font-body leading-relaxed"
              >
                Whether you're looking for a dream home site or a smart investment, our team ensures
                you get the best plot options with 100% legal clearance and world-class infrastructure.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Complete Real Estate Guidance — From Plot Selection to Registration"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-lg p-6 group hover:shadow-gold transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* //main_project */}
      {/* Featured Projects */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title=" Main Projects"
            subtitle="Discover the Best Open Plot Projects in Andra Pradesh"
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
      {/* ... */}

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Indra Properties?"
            subtitle="The Smart Way to Invest in Land"
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 glass-card rounded-lg px-5 py-4"
              >
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-body text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Zones */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Andra Pradesh's Hottest Investment Zones"
            subtitle="Invest in high-growth corridors with excellent appreciation potential."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {investmentZones.map((zone, i) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-lg p-5 hover:shadow-gold transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">{zone.name}</h3>
                </div>
                <div className="flex justify-between text-sm font-body">
                  <div>
                    <p className="text-muted-foreground text-xs">Growth Potential</p>
                    <p className={`font-semibold ${zone.growth === "Very High" ? "text-green-400" : zone.growth === "High" ? "text-primary" : "text-muted-foreground"}`}>
                      {zone.growth}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-xs">Expected ROI</p>
                    <p className="font-semibold text-primary">{zone.roi}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-20 overflow-hidden">
        <video
          src="https://res.cloudinary.com/dakwcewks/video/upload/vid1-BZS_rmrF_aadta4.mp4"
          alt="Indra Properties premium"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative container mx-auto px-4">
          <SectionHeading
            title="How We Work"
            subtitle="Simple & Transparent Process"
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-lg p-6 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground font-body font-bold text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Testimonials from happy customers"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-card rounded-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed italic mb-5">
                  "{t.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs font-body flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card rounded-lg border-none px-6"
                >
                  <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-body text-xs tracking-[0.25em] uppercase mb-3"
              >
                Get Expert Guidance
              </motion.p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Ready to Invest in
                <br />
                <span className="text-gold-gradient">Your Future?</span>
              </h2>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Don't miss out on Andra Pradesh's fastest appreciating land. Book a
                free site visit today and take the first step toward your dream
                property.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground font-body text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Gudur, Andhra Pradesh
                </div>
                <a href="tel:+919885353637" className="flex items-center gap-3 text-foreground font-body text-sm hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                  +91 9885353637
                </a>
                <a href="mailto: indraproperties0005@gmail.com" className="flex items-center gap-3 text-foreground font-body text-sm hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                   indraproperties0005@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="tel:+919885353637"
                  className="bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm text-center"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919885353637"
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
