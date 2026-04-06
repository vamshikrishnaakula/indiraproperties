import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9885353637", href: "tel:+919885353637" },
  { icon: Mail, label: "Email", value: " indraproperties0005@gmail.com", href: "mailto: indraproperties0005@gmail.com" },
  { icon: MapPin, label: "Office", value: "4VH8+XPQ, Service Rd, Chillakur, Gudur, Andhra Pradesh 524412, India" },
  { icon: Clock, label: "Timings", value: "Mon - Sat, 9:00 AM - 7:00 PM" },
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Contact <span className="text-gold-gradient">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Get in touch with us to learn more about our projects or schedule a free site visit.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Reach Out To Us" centered={false} />
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-body font-semibold text-sm">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-body text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+91 9885353637"
                  className="bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md font-body font-semibold text-sm text-center flex-1"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919885353637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold text-primary px-6 py-3 rounded-md font-body font-semibold text-sm text-center flex-1 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden border border-border aspect-[16/7]">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160753!2d78.24323!3d17.2473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba12a3d70ffff%3A0x1!2sChillakuru!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indra Properties office location"
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1072148006756!2d79.8678917!3d14.129791899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce30015c1ec49%3A0x5eb9eabdabb3f653!2sIndra%20properties!5e0!3m2!1sen!2sus!4v1775368118659!5m2!1sen!2sus"  className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Indra Properties office location"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
