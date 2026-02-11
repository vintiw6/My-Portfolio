"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelPanel } from "./PixelPanel";
import { Code, Server, Database, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Server className="w-5 h-5" />, // Using Server icon as placeholder for Layout/UI
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    title: "Data Science",
    icon: <Brain className="w-5 h-5" />,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-4xl text-accent-secondary mb-4">Skill Tree</h2>
          <p className="font-mono text-text-secondary">Abilities unlocked and mastered.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PixelPanel title={category.title} className="h-full">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-2 text-accent-highlight">
                    {category.icon}
                    <span className="font-bold font-mono">Mastery</span>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex justify-between items-center bg-background/50 p-2 border border-panel-border transition-colors hover:border-accent-primary">
                        <span className="font-mono text-sm text-text-primary">{skill}</span>
                        <div className="w-2 h-2 bg-accent-primary animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </PixelPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
