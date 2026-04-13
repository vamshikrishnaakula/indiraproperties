import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import mdPhoto from "@/assets/md-photo.jpg";
import gallery6 from "@/assets/Our-team/Managing-Director-Sai-Krishna-Somisetty.png";

const whyChoose = [
  "15+ years of industry experience",
  "100% DTCP & RERA approved projects",
  "Transparent & clear title documentation",
  "Prime locations with high appreciation",
  "World-class infrastructure & amenities",
  "Trusted by 2,500+ happy families",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Banner */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            About <span className="text-gold-gradient">Indra Properties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Building trust, delivering dreams since 2009.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Our Story" />
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Founded in 2009, Indra Properties has grown from a small family
              venture to one of Andra Pradesh's most trusted names in open plot
              development. We specialize in identifying prime locations,
              developing world-class infrastructure, and delivering transparent
              land investment opportunities.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our mission is simple — to make land ownership accessible,
              transparent, and rewarding for every Indian family. With over 25
              successfully delivered projects and 2,500+ happy customers, we
              continue to set benchmarks in quality and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg p-8"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To be the most trusted real estate brand in South India, known
                for transparency, quality infrastructure, and creating lasting
                value for every customer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg p-8"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To deliver premium, legally compliant open plots with world-class
                amenities at strategic locations, empowering families to invest
                confidently in their future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Indra Properties?" />
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground font-body text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MD Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading title="Message from Our Managing Director" />
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mx-auto"
            >
              <div className="w-84 h-80 rounded-lg overflow-hidden border-2 border-gold shadow-gold bg-white">
                <img
                  src={gallery6}
                  alt="Managing Director of Indra Properties"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-display text-lg font-semibold text-foreground">
                  Mr. Sai krishna Somisetty
                </p>
                <p className="text-primary text-sm font-body">
                  Managing Director of Indra Properties
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-muted-foreground font-body leading-relaxed italic text-lg border-l-2 border-gold pl-6">
                "At Indra Properties, we don't just sell plots — we build
                relationships and create legacies. Every project we undertake
                reflects our commitment to quality, transparency, and customer
                satisfaction. Our goal has always been to make land investment a
                simple, secure, and rewarding journey for every family."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
