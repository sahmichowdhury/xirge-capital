import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Send,
  Leaf,
  Clock,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent successfully!", {
      description: "Our team will get back to you within 24-48 hours.",
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden bg-xgreen-50">
        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-xgreen text-xs uppercase tracking-[0.3em] mb-3 font-medium">
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-[1.1] text-foreground">
              Let's start a <span className="text-gradient-green italic">conversation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Whether you're an experienced investor or just starting your journey, our team is
              here to help. Reach out to learn more about ethical investing with Xirge Capital.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  variants={fadeUp}
                  className="p-12 rounded-xl bg-white border border-xgreen/20 shadow-sm text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-xgreen/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-xgreen" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Thank you for reaching out.</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your message and our team will respond within 24-48 business hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="border-xgreen/40 text-xgreen hover:bg-xgreen/10"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={fadeUp}>
                    <div className="p-8 rounded-xl bg-white border border-border shadow-sm space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm text-foreground">
                            Full Name <span className="text-xgreen">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-background border-border focus:border-xgreen/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm text-foreground">
                            Email Address <span className="text-xgreen">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-background border-border focus:border-xgreen/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm text-foreground">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="What would you like to discuss?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="bg-background border-border focus:border-xgreen/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm text-foreground">
                          Message <span className="text-xgreen">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your investment goals, questions, or how we can help..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-background border-border focus:border-xgreen/50 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="bg-xgreen hover:bg-xgreen-dark text-white font-semibold gap-2 w-full sm:w-auto"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </Button>
                    </div>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 space-y-6"
            >
              <motion.div variants={fadeUp} className="p-6 rounded-xl bg-white border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-xgreen/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-xgreen" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">Email Us</h4>
                    <a href="mailto:info@xirgecapital.com" className="text-sm text-xgreen hover:text-xgreen-dark transition-colors">
                      info@xirgecapital.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  For general inquiries, investment questions, or partnership opportunities.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="p-6 rounded-xl bg-white border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-xgreen/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-xgreen" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">Response Time</h4>
                    <p className="text-sm text-muted-foreground">24-48 business hours</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our team reviews every inquiry personally and will respond promptly.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="p-6 rounded-xl bg-white border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-xgreen/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-xgreen" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground">What to Expect</h4>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-xgreen shrink-0 mt-0.5" />
                    <span>Personalized response from our team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-xgreen shrink-0 mt-0.5" />
                    <span>No obligation consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-xgreen shrink-0 mt-0.5" />
                    <span>Ethical investing guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-xgreen shrink-0 mt-0.5" />
                    <span>Investment education resources</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="p-4 rounded-lg bg-xgreen/5 border border-xgreen/15">
                <div className="flex items-center gap-2 text-xgreen text-xs">
                  <Leaf className="w-3.5 h-3.5" />
                  <span className="font-medium">Your information is kept strictly confidential.</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
