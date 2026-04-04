import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-display font-bold text-gold-gradient mb-4">
              Indra Properties
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Turning dreams into reality with premium open plots and land
              investments across prime locations.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Projects" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@indraproperties.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@indraproperties.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123, Jubilee Hills, Hyderabad, Telangana - 500033</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-primary transition-all text-xs font-body"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Indra Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
