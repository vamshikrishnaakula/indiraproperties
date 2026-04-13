import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import gallery1 from "@/assets/sai_Happy_homes/Arch.png";
import gallery2 from "@/assets/sai_Happy_homes/IMG_20260406_143150.jpg.jpeg";
import gallery3 from "@/assets/sai_Happy_homes/IMG_20260406_143157.jpg.jpeg";
import gallery4 from "@/assets/sai_Happy_homes/IMG_20260406_143240.jpg.jpeg";
import gallery5 from "@/assets/sai_Happy_homes/IMG_20260406_143324.jpg.jpeg";
import gallery6 from "@/assets/sai_Happy_homes/IMG_20260406_143351.jpg.jpeg";
import gallery7 from "@/assets/sai_Happy_homes/IMG_20260406_143431.jpg.jpeg";
import gallery8 from "@/assets/sai_Happy_homes/IMG_20260406_143440.jpg.jpeg";
import gallery9 from "@/assets/sai_Happy_homes/IMG_20260406_143610.jpg.jpeg";
import gallery10 from "@/assets/sai_Happy_homes/IMG_20260406_143621.jpg.jpeg";
import gallery11 from "@/assets/sai_Happy_homes/IMG_20260406_143627.jpg.jpeg";
import gallery12 from "@/assets/sai_Happy_homes/IMG_20260406_143639.jpg.jpeg";
import gallery13 from "@/assets/sai_Happy_homes/IMG_20260406_143646.jpg.jpeg";
import gallery14 from "@/assets/sai_Happy_homes/IMG_20260406_143717.jpg.jpeg";
import gallery15 from "@/assets/sai_Happy_homes/IMG_20260406_143821.jpg.jpeg";


const images = [
  { src: gallery1, alt: "Indra Golden City aerial view" },
  { src: gallery2, alt: "Indra Green Valley entrance" },
  { src: gallery3, alt: "Indra Hill View panoramic" },
  { src: gallery4, alt: "Site development in progress" },
  { src: gallery5, alt: "Indra Green Valley entrance" },
  { src: gallery6, alt: "Completed infrastructure" },
  { src: gallery7, alt: "Site development updates" },
  { src: gallery8, alt: "Indra Golden City aerial view" },
  { src: gallery9, alt: "Indra Green Valley entrance" },
  { src: gallery10, alt: "Indra Hill View panoramic" },
  { src: gallery11, alt: "Site development in progress" },
  { src: gallery12, alt: "Indra Green Valley entrance" },
  { src: gallery13, alt: "Completed infrastructure" },
  { src: gallery14, alt: "Site development updates" },
  { src: gallery15, alt: "Indra Golden City aerial view" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Project <span className="text-gold-gradient">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            A visual journey through our premium developments and site progress.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Site Images & Developments" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(i)}
                className="cursor-pointer group rounded-lg overflow-hidden border border-border hover:shadow-gold transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground hover:text-primary z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
