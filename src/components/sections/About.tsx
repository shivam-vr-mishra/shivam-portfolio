"use client";

import { motion } from "framer-motion";

export default function About() {
  const text = "I am a Software Development Engineer specialized in building robust, scalable enterprise applications. With strong expertise in Java, Spring Boot, Microservices, and Angular, I focus on delivering clean, maintainable code and high-performance systems. My passion lies in solving complex problems through distributed systems, cloud-native architectures, and AI integrations.";

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-24 relative flex items-center min-h-[50vh]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-12">
            Building <span className="text-gradient">Scalable</span> Solutions
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light flex flex-wrap justify-center gap-x-2 gap-y-2"
          >
            {words.map((word, index) => (
              <motion.span variants={child} key={index} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
