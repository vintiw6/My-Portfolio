"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelPanel } from "./PixelPanel";
import { User, Code, Database, Brain } from "lucide-react";

export function About() {
  const stats = [
    { label: "Level", value: "21", icon: <User className="w-4 h-4" /> },
    { label: "Class", value: "Student", icon: <Code className="w-4 h-4" /> },
    { label: "Experience", value: "1 Month", icon: <Database className="w-4 h-4" /> },
    { label: "Mana", value: "100%", icon: <Brain className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <PixelPanel title="Character Info">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Stats Column */}
              <div className="w-full md:w-1/3 space-y-4">
                <div className="pixel-box p-4 bg-background/50">
                  <h3 className="font-pixel text-accent-primary mb-4 text-center">Stats</h3>
                  <div className="space-y-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center text-sm font-mono border-b border-panel-border pb-1">
                        <span className="text-text-secondary flex items-center gap-2">
                          {stat.icon} {stat.label}
                        </span>
                        <span className="text-text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio Column */}
              <div className="flex-1 space-y-4">
                <h3 className="font-pixel text-2xl text-accent-secondary">About The Player</h3>
                <div className="font-mono text-text-secondary space-y-4 leading-relaxed">
                  <p>
                    <span className="text-accent-highlight">&gt;</span> Hello! I'm Vinayak, a passionate developer spanning the realms of <span className="text-accent-primary">Web Development</span> and <span className="text-accent-primary">Data Science</span>.
                  </p>
                  <p>
                    <span className="text-accent-highlight">&gt;</span> I craft digital experiences that are not only functional but also visually engaging. My journey started with a fascination for how code can bring static designs to life, much like pixels forming a character.
                  </p>
                  <p>
                    <span className="text-accent-highlight">&gt;</span> When I'm not coding, I'm exploring new technologies, optimizing algorithms, or enjoying retro games for inspiration.
                  </p>
                </div>
                
                {/* Tech Badges / Inventory */}
                <div className="pt-4">
                  <h4 className="font-pixel text-sm text-text-secondary mb-2">Inventory (Skills Overview)</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Python", "MongoDB", "Tailwind"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-background border border-panel-border text-xs font-mono text-accent-highlight">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PixelPanel>
        </motion.div>
      </div>
    </section>
  );
}
