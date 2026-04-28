"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Server, Database, Container, LayoutTemplate, Terminal, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-blue-400 mb-4" />,
    skills: ["Java", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    color: "from-blue-500/20 via-blue-500/5 to-transparent",
    borderColor: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20"
  },
  {
    title: "Frameworks",
    icon: <LayoutTemplate className="w-6 h-6 text-purple-400 mb-4" />,
    skills: ["Spring Boot", "Spring Framework", "Hibernate", "Java Persistence API (JPA)", "Angular", "Handlebars.js"],
    color: "from-purple-500/20 via-purple-500/5 to-transparent",
    borderColor: "group-hover:border-purple-500/50",
    shadow: "group-hover:shadow-purple-500/20"
  },
  {
    title: "Architecture & Web",
    icon: <Server className="w-6 h-6 text-cyan-400 mb-4" />,
    skills: ["Microservices Architecture", "RESTful APIs", "GraphQL", "Spring AI", "ETL Pipelines"],
    color: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    borderColor: "group-hover:border-cyan-500/50",
    shadow: "group-hover:shadow-cyan-500/20"
  },
  {
    title: "Databases & DevOps",
    icon: <Database className="w-6 h-6 text-green-400 mb-4" />,
    skills: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "Kubernetes"],
    color: "from-green-500/20 via-green-500/5 to-transparent",
    borderColor: "group-hover:border-green-500/50",
    shadow: "group-hover:shadow-green-500/20"
  },
  {
    title: "Development Tools",
    icon: <Terminal className="w-6 h-6 text-pink-400 mb-4" />,
    skills: ["Git", "Smart Git", "IntelliJ", "Eclipse", "VS Code", "Visual Studio"],
    color: "from-pink-500/20 via-pink-500/5 to-transparent",
    borderColor: "group-hover:border-pink-500/50",
    shadow: "group-hover:shadow-pink-500/20"
  },
  {
    title: "AI Assistants",
    icon: <Cpu className="w-6 h-6 text-yellow-400 mb-4" />,
    skills: ["GitHub Copilot", "ChatGPT", "Cursor (AI Editor)"],
    color: "from-yellow-500/20 via-yellow-500/5 to-transparent",
    borderColor: "group-hover:border-yellow-500/50",
    shadow: "group-hover:shadow-yellow-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400">Tools and technologies I use to build world-class applications.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                "group relative glass p-8 rounded-3xl border border-white/5 transition-all duration-300 overflow-hidden shadow-lg h-full flex flex-col",
                category.borderColor,
                category.shadow
              )}
            >
              {/* Animated Gradient Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={cn(
                  "absolute -inset-[50%] bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none",
                  category.color
                )}
              />

              <div className="relative z-10 flex flex-col h-full">
                <motion.div
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { type: "spring", stiffness: 300 },
                    scale: { type: "spring", stiffness: 300 }
                  }}
                  className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:bg-white/10 transition-colors shadow-lg"
                >
                  {category.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-6 font-heading text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{category.title}</h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map(skill => (
                    <motion.span
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -4, rotate: (skill.length % 5) - 2 }}
                      key={skill}
                      className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-white/20 hover:!bg-white/20 hover:text-white transition-all cursor-default shadow-sm hover:shadow-lg hover:z-10 relative"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
