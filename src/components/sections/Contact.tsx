import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<ContactForm> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? Drop me a message.
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Reveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's work together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, I'll try my best 
                  to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {socialLinks.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 rounded-2xl border border-border bg-card"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting || isSuccess}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Sent Successfully!
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
