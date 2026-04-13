import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  projectName?: string;
}

const EnquiryForm = ({ projectName }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    if (!/^\d{10}$/.test(form.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Enquiry Submitted!",
        description: "Opening WhatsApp to connect with our team...",
      });

      // Format message with all details
      const waMsg = `
*New Enquiry from ${form.name}*
📞 Phone: ${form.phone}
🏢 Project: ${projectName || "Indra Properties"}
💬 Message: ${form.message || "No additional message"}
      `.trim();

      // Send via WhatsApp Web Link
      window.open(
        `https://wa.me/919885353637?text=${encodeURIComponent(waMsg)}`,
        "_blank"
      );

      setForm({ name: "", phone: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="glass-card rounded-lg p-6 md:p-8 space-y-5"
    >
      <h3 className="text-xl font-display font-semibold text-foreground">
        {projectName ? `Enquire About ${projectName}` : "Get In Touch"}
      </h3>

      <input
        type="text"
        placeholder="Your Name *"
        required
        maxLength={100}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-gold transition-colors"
      />

      <input
        type="tel"
        placeholder="Phone Number *"
        required
        maxLength={10}
        inputMode="numeric"
        pattern="[0-9]{10}"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
        }
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-gold transition-colors"
      />

      <textarea
        placeholder="Your Message"
        rows={3}
        maxLength={500}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold-gradient text-primary-foreground py-3 rounded-md font-body font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        <Send className="w-4 h-4" />
        {loading ? "Submitting..." : "Send Enquiry"}
      </button>
    </motion.form>
  );
};

export default EnquiryForm;
