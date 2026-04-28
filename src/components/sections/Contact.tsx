"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin as Linkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-neon-blue/5 rounded-t-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">Open for new opportunities and collaborations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-6 md:p-8 rounded-3xl border border-white/5 inline-block w-full max-w-xl"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:shivam.mishra7733@gmail.com"
              className="flex flex-col items-center gap-3 text-gray-300 hover:text-white group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-colors shadow-lg group-hover:shadow-neon-blue/20">
                <Mail className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium">Email Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://linkedin.com/in/shivam-mishra-11a317108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-300 hover:text-white group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-colors shadow-lg group-hover:shadow-neon-blue/20">
                <Linkedin className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </motion.a>

            {/* <motion.div 
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex flex-col items-center gap-3 text-gray-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-neon-blue/10 transition-colors shadow-lg group-hover:shadow-neon-blue/20">
                <MapPin className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-medium">Ahmedabad</span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
