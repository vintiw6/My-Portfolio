"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelPanel } from "./PixelPanel";
import { User, Code, Database, Brain } from "lucide-react";

export function About() {
  const stats = [
    { label: "Level", value: "21", icon: <User className="w-4 h-4" /> },
    { label: "Class", value: "Student", icon: <Code className="w-4 h-4" /> },
    { label: "Experience", value: "6 Months", icon: <Database className="w-4 h-4" /> },
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
                    <span className="text-accent-highlight">&gt;</span> Hello! I'm Vinayak, an <span className="text-accent-primary">ML Engineer</span> and <span className="text-accent-primary">Data Scientist</span> specializing in training and implementing intelligent pipelines.
                  </p>
                  <p>
                    <span className="text-accent-highlight">&gt;</span> I build end-to-end machine learning systems, deep learning models, and real-time scrapers that turn complex unstructured data into actionable insights and tools.
                  </p>
                  <p>
                    <span className="text-accent-highlight">&gt;</span> When I'm not tuning hyperparameters or optimizing training processes, I enjoy studying new AI research papers, participating in Kaggle challenges, and retro gaming.
                  </p>
                </div>
                
                {/* Tech Badges / Inventory */}
                <div className="pt-4">
                  <h4 className="font-pixel text-sm text-text-secondary mb-2">Inventory (Skills Overview)</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "NLP", "Streamlit"].map((tech) => (
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
