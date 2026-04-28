"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const PROJECTS = [
  {
    title: "ONE Platform - Unified AI-Native Enterprise Solution",
    description: "An AI-native, cloud-native SaaS solution providing a single source of truth for enterprise data (products, pricing, supply chain) across the retail, CPG, and grocery sectors. The platform unifies Master Data Management (MDM), Product Experience Management (PXM), and intelligent planning/execution modules to drive operational efficiency and accelerate time-to-market.",
    tech: ["Spring Boot", "Hibernate", "Angular", "MySQL", "PostgreSQL", "Python", "ETL", "Kubernetes", "Docker", "Grafana"],
    image: "from-blue-500/20 to-purple-500/20",
    link: "https://www.digitalwavetechnology.com/"
  },
  {
    title: "Enterprise Product Information Management (PIM)",
    description: "An enterprise-grade cloud-native and API-first SaaS solution for centralizing, managing, enriching, and publishing product data. PIM is ideal for eliminating spreadsheet and email chaos and bringing many products, items, SKUs, vendors, team members, brands, digital, physical, and print channels into a centrally managed solution with workflow, automation, and data governance.",
    tech: ["Spring Boot", "Hibernate", "Angular", "Elastic Search", "i18N", "Handlebar JS", "Log4j", "MySQL"],
    image: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Property Management System",
    description: "This ERP is for real estate property management & analytics. This includes an eye-pleasant website for information about the organization, team & their goals.",
    tech: ["Spring Boot", "Hibernate", "Tomcat", "jQuery", "Ajax", "CSS", "HTML", "MySQL"],
    image: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "UK Gunroom Portal",
    description: "This is an online portal to buy and sell guns. There are multiple dealers and clients who can buy and sell guns as per requirement. Invoices and payment can be managed within this online portal.",
    tech: ["J2EE", "JSP", "Servlet", "Spring MVC", "Hibernate", "jQuery", "Ajax", "CSS", "HTML", "Jasper Reports", "Spring REST", "Log4j", "Tomcat", "MySQL"],
    image: "from-green-500/20 to-cyan-500/20"
  },
  {
    title: "Farm Management ERP",
    description: "Farm system is an online ERP including farm management system & web. The ERP is capable to manage employees, website orders, accounts, inventory & sales management.",
    tech: ["J2EE", "Spring ZK", "MyBatis", "Maven", "ZUL", "jQuery", "Ajax", "CSS", "Jasper Reports", "Log4j", "Tomcat", "MySQL"],
    image: "from-orange-500/20 to-red-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400">Enterprise solutions designed for scale and performance.</p>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-8 max-w-6xl mx-auto space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass rounded-3xl overflow-hidden border border-white/5 group hover:border-neon-cyan/30 transition-all duration-500 hover:-translate-y-2 break-inside-avoid flex flex-col h-full relative"
            >
              {/* Abstract Placeholder Image */}
              {/* <div className={`w-full h-48 md:h-auto ${index === 0 ? "md:w-1/2" : ""} bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-6 py-3 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2">
                    View Details <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div> */}

              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* <button className="text-gray-400 hover:text-neon-cyan transition-colors">
                    <Github className="w-5 h-5" />
                  </button> */}
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors hover:scale-110">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <button className="text-gray-400 opacity-30 cursor-not-allowed">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
