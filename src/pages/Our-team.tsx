import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import gallery1 from "@/assets/Our-team/G_Bramhaiah.jpg";
import gallery2 from "@/assets/Our-team/D_Vinay.jpg";
import gallery4 from "@/assets/Our-team/SK_Inthiyaz.jpg";
import gallery5 from "@/assets/Our-team/M_Gopi.jpg";
import gallery6 from "@/assets/Our-team/Managing-Director-Sai-Krishna-Somisetty.png";
import mDphoto from "@/assets/Our-team/Managing-Director-Sai-Krishna.jpeg";

const managingDirector = { src: mDphoto, alt: "Managing Director: Sai Krishna Somisetty" };

const images = [
  { src: gallery1, alt: "G.Brahmaiah" },
  { src: gallery2, alt: "D.Vinay" },
  { src: gallery4, alt: "S.K.Inthiyaz" },
  { src: gallery5, alt: "M.Gopi" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-10">
      <section className="py-10 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our <span className="text-gold-gradient">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Meet our dedicated team of real estate professionals committed to guiding you with trust, clarity, and care.
            Together, we help you find the right investment with confidence from site visit to final support.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Team Members" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelected(0)}
            className="mx-auto mb-14 w-full max-w-3xl cursor-pointer overflow-hidden rounded-lg border border-border bg-background p-3 shadow-sm transition-all hover:shadow-gold"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-white">
              <img
                src={managingDirector.src}
                alt={managingDirector.alt}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mt-4 text-center font-display text-xl font-semibold text-foreground">
              {managingDirector.alt}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelected(i + 1)}
                className="group mx-auto w-full max-w-[230px] cursor-pointer text-center transition-all"
              >
                <div className="aspect-square overflow-hidden rounded-full border border-border bg-background shadow-sm transition-all group-hover:shadow-gold">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {img.alt}
                </h3>
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
              src={[managingDirector, ...images][selected].src}
              alt={[managingDirector, ...images][selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
