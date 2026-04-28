"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Senior Java Developer",
    company: "Digital Wave Technologies Pvt Ltd",
    period: "05/2021 – Present",
    location: "Ahmedabad, India",
    //description: "Leading the development of highly scalable enterprise applications using Java and Spring Boot across multiple subsidiaries.",
    children: [
      {
        role: "Senior Java Developer",
        company: "Cyno Data",
        period: "April 2025 – Present",
        //  description: "Contributed to backend architecture and development of data-centric applications."
      },
      {
        role: "Senior Java Developer",
        company: "En Pointe",
        period: "April 2024 – March 2025",
        //  description: "Designed and implemented robust backend services, optimizing data processing workflows and migrating monolithic architectures to cloud-native microservices."
      },
      {
        role: "Software Engineer",
        company: "PlumSlice Labs",
        period: "May 2021 – March 2024",
        //  description: "Developed enterprise Product Information Management (PIM) systems using Spring Boot and Elasticsearch. Improved system performance by 40% through query optimization."
      }
    ]
  },
  {
    role: "Junior Java Developer",
    company: "EliteEvince Technologies Pvt Ltd",
    period: "Feb 2018 – April 2021",
    location: "Ahmedabad, India",
    //description: "Contributed to backend development using Java and Spring Framework. Built RESTful APIs and collaborated with front-end teams for seamless integrations."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background bg-neon-purple flex items-center justify-center z-10 glow-box"
                >
                  <Briefcase className="w-3 h-3 text-white" />
                </motion.div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300 group shadow-lg hover:shadow-neon-purple/20"
                  >
                    <span className="text-sm text-neon-blue font-medium mb-2 block">{exp.period}</span>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-neon-purple transition-colors">{exp.role}</h3>
                    <h4 className={`font-medium mb-4 ${exp.children ? 'text-neon-cyan text-lg' : 'text-gray-400'}`}>
                      {exp.company}
                      {exp.location && <span className="block text-sm text-gray-500 mt-1 font-normal">{exp.location}</span>}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>

                    {exp.children && (
                      <div className="mt-6 space-y-5 border-l-2 border-neon-purple/30 pl-5 text-left">
                        {exp.children.map((child, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            whileHover={{ x: 5 }}
                            className="relative"
                          >
                            <div className="absolute -left-[27px] top-2 w-2 h-2 rounded-full bg-neon-blue" />
                            <span className="text-xs text-neon-blue font-medium block mb-1">{child.period}</span>
                            <h5 className="text-md font-bold text-white group-hover:text-neon-cyan transition-colors">{child.role}</h5>
                            <h6 className="text-sm text-gray-400 mb-2">{child.company}</h6>
                            <p className="text-xs text-gray-500 leading-relaxed">{child.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
