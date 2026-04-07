import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.85fr_0.85fr_0.95fr_2.2fr] lg:items-start">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Indra Properties" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground/70 font-body text-sm leading-relaxed max-w-md">
              Your trusted real estate advisory partner in Chillakuru. We help you make confident property decisions with clarity and care.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "#", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground/70 hover:text-primary transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-5">Services</h4>
            <ul className="space-y-2 text-muted-foreground/70 text-sm font-body">
              <li>Property Consultation</li>
              <li>Investment Advisory</li>
              <li>Site Visits</li>
              <li>Buyer Support</li>
              <li>Title Verification</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-5">Contact</h4>
            <div className="space-y-3 text-sm font-body">
              <a
                href="tel:+919885353637"
                className="flex items-center gap-3 text-muted-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                +91 9885353637
              </a>
              <a
                href="mailto: indraproperties0005@gmail.com"
                className="flex items-center gap-3 text-muted-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                 indraproperties0005@gmail.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground/70">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>Gudur, Andhra Pradesh 524412</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-5">Location</h4>
            <div className="overflow-hidden border border-border bg-zinc-950/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1072148006756!2d79.8678917!3d14.129791899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce30015c1ec49%3A0x5eb9eabdabb3f653!2sIndra%20properties!5e0!3m2!1sen!2sus!4v1775364422417!5m2!1sen!2sus"
                className="w-full h-[160px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indra Properties Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground/70 text-xs font-body">
            © {new Date().getFullYear()} Indra Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
