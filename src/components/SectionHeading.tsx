import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  titleClassName = "text-foreground",
  subtitleClassName = "text-muted-foreground",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className={`text-3xl md:text-4xl font-display font-bold mb-3 ${titleClassName}`}>
        {title}
      </h2>
      <div className="w-20 h-0.5 bg-gold-gradient mx-auto mb-4" />
      {subtitle && (
        <p className={`font-body max-w-2xl mx-auto ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
