import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import gallery1 from "@/assets/Highway_houses_phase-2/19.png";
import gallery2 from "@/assets/Highway_houses_phase-2/BWEDITING0002T01.JPG";
import gallery3 from "@/assets/Highway_houses_phase-2/BWEDITING0008T01.JPG";
import gallery4 from "@/assets/Highway_houses_phase-2/BWEDITING0015T01.JPG";
import gallery5 from "@/assets/Highway_houses_phase-2/BWEDITING0016T01.JPG";
import gallery6 from "@/assets/Highway_houses_phase-2/BWEDITING0017T01.JPG";
import gallery7 from "@/assets/Highway_houses_phase-2/BWEDITING0018T01.JPG";
import gallery8 from "@/assets/Highway_houses_phase-2/BWEDITING0023T01.JPG";
import gallery9 from "@/assets/Highway_houses_phase-2/BWEDITING0027T01.JPG";
import gallery10 from "@/assets/Highway_houses_phase-2/BWEDITING0029T01.JPG";
import gallery11 from "@/assets/Highway_houses_phase-2/C8108T01.JPG";
import gallery12 from "@/assets/Highway_houses_phase-2/C8113T01.JPG";
import gallery13 from "@/assets/Highway_houses_phase-2/C8114T01.JPG";
import gallery14 from "@/assets/Highway_houses_phase-2/C8120T01.JPG";
import gallery15 from "@/assets/Highway_houses_phase-2/C8124T01.JPG";
import gallery16 from "@/assets/Highway_houses_phase-2/C8138T01.JPG";
import gallery17 from "@/assets/Highway_houses_phase-2/C8140T01.JPG";
import gallery18 from "@/assets/Highway_houses_phase-2/C8143T01.JPG";
import gallery19 from "@/assets/Highway_houses_phase-2/C8144T01.JPG";
import gallery20 from "@/assets/Highway_houses_phase-2/C8145T01.JPG";
import gallery21 from "@/assets/Highway_houses_phase-2/C8143T01.JPG";
import gallery22 from "@/assets/Highway_houses_phase-2/C8147T01.JPG";


const images = [
  { src: gallery1, alt: "Indra Golden City aerial view" },
  { src: gallery2, alt: "Site development in progress" },
  { src: gallery3, alt: "Indra Green Valley entrance" },
  { src: gallery4, alt: "Completed infrastructure" },
  { src: gallery5, alt: "Indra Hill View panoramic" },
  { src: gallery6, alt: "Premium villa plots aerial" },
  { src: gallery7, alt: "Indra Golden City aerial view" },
  { src: gallery8, alt: "Site development in progress" },
  { src: gallery9, alt: "Indra Green Valley entrance" },
  { src: gallery10, alt: "Completed infrastructure" },
  { src: gallery11, alt: "Indra Hill View panoramic" },
  { src: gallery12, alt: "Premium villa plots aerial" },
  { src: gallery13, alt: "Indra Golden City aerial view" },
  { src: gallery14, alt: "Site development updates" },
  { src: gallery15, alt: "Hill View residential" },
  { src: gallery16, alt: "Completed infrastructure" },
  { src: gallery17, alt: "Indra Hill View panoramic" },
  { src: gallery18, alt: "Indra Hill View panoramic" },
  { src: gallery19, alt: "Indra Hill View panoramic" },
  { src: gallery20, alt: "Site development updates" },
  { src: gallery21, alt: "Indra Hill View panoramic" },
  { src: gallery22, alt: "Hill View residential" },
];

const SaiPhase2 = () => {
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
            Sai Highway Houses Gallery <span className="text-gold-gradient">Phase-2</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            A Real journey through our premium developments and site progress.
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

export default SaiPhase2;
