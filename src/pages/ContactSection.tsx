import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from "sonner";  // <-- Correct import here
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", // replace with your EmailJS service ID
        "your_template_id", // replace with your EmailJS template ID
        formRef.current!,
        "your_public_key" // replace with your EmailJS public key
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent! Thanks for reaching out.");
        formRef.current?.reset();
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong, please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 md:px-16 bg-white text-black dark:bg-black dark:text-white"
    >
      {/* Place Toaster here or at root of app (once) */}
      <Toaster position="bottom-center" richColors />

      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center text-balance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s build something great together 🚀
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-6 bg-background/80 backdrop-blur rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Input
              type="text"
              id="name"
              name="from_name"
              placeholder=" "
              required
              className="peer"
            />
            <Label
              htmlFor="name"
              className="absolute left-3 top-1 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400"
            >
              Your Name
            </Label>
          </div>

          <div className="relative">
            <Input
              type="email"
              id="email"
              name="from_email"
              placeholder=" "
              required
              className="peer"
            />
            <Label
              htmlFor="email"
              className="absolute left-3 top-1 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400"
            >
              Your Email
            </Label>
          </div>

          <div className="relative">
            <Textarea
              id="message"
              name="message"
              placeholder=" "
              required
              rows={5}
              className="peer resize-none"
            />
            <Label
              htmlFor="message"
              className="absolute left-3 top-2 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400"
            >
              Your Message
            </Label>
          </div>

          <Button type="submit" size="lg" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-8 mt-10 text-3xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="mailto:gsagar.ktkr@gmail.com" aria-label="Email" className="hover:text-yellow-400">
            <FaEnvelope />
          </a>
          <a href="https://github.com/sagar-godugu" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-yellow-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sagargodugu" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
