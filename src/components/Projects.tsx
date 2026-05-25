"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelCard } from "./PixelCard";
import { PixelButton } from "./PixelButton";
import { Github, ExternalLink, Code } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Indian News Bias Auditor",
      description: "A real-time NLP pipeline that scrapes 8 major Indian news outlets daily and scores each article for political bias, emotional intensity, clickbait, and framing differences.",
      tags: ["NLP", "Python", "Streamlit", "Transformers", "Scraping"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Bias-Checker",
      demo: "https://bias-checker-00.streamlit.app/",
    },
    {
      title: "Football Analysis using YOLO",
      description: "Real-time football analysis, tracking players and the ball using YOLO object detection models.",
      tags: ["YOLO", "Computer Vision", "Python", "Deep Learning"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Football-Analysis-using-YOLO",
      demo: "https://github.com/vintiw6/Football-Analysis-using-YOLO/blob/main/README.md",
    },
    {
      title: "Brain Tumor Detection",
      description: "Deep learning model for detecting brain tumors from MRI scans with high accuracy.",
      tags: ["Deep Learning", "Python", "Computer Vision", "VGG16"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Brain-Tumor-Detection-Using-Deep-Learning/tree/main",
      demo: "https://github.com/vintiw6/Brain-Tumor-Detection-Using-Deep-Learning/blob/main/README.md",
    },
    {
      title: "Dessert Haven Website",
      description: "A delightful website for a dessert shop featuring a responsive design and appetizing gallery.",
      tags: ["Web Design", "HTML/CSS", "Responsive"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Projects/tree/main/Dessert-Haven-Website",
      demo: "https://dessert-haven-website.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Real-time weather application consuming OpenWeatherMap API with pixel-perfect UI.",
      tags: ["JavaScript", "API", "CSS"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Projects/tree/main/Weather-App",
      demo: "https://vintiw6-weather-app.vercel.app/",
    },
    {
      title: "Credit Card Validator",
      description: "A secure tool to validate credit card numbers using the Luhn algorithm. Implements real-time validation and card type detection.",
      tags: ["Python", "Algorithm", "Security"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Projects/tree/main/CreditCard-Validator",
      demo: "https://github.com/vintiw6/Projects/tree/main/CreditCard-Validator",
    },
    {
      title: "Slot Machine",
      description: "A fun, interactive slot machine game built with pure JavaScript and CSS animations.",
      tags: ["Game Dev", "JS", "Animation"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Projects/tree/main/SlotMachine",
      demo: "https://github.com/vintiw6/Projects/tree/main/SlotMachine",
    },
    {
      title: "Data Analysis Suite",
      description: "Collection of data analysis projects using Pandas and NumPy for insightful visualizations.",
      tags: ["Data Science", "Pandas", "NumPy"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Projects/tree/main/DataAnalysis-Basic",
      demo: "https://github.com/vintiw6/Projects/tree/main/DataAnalysis-Basic",
    },
    {
      title: "Football Data Analysis",
      description: "In-depth analysis of football match data with visualizations and statistical insights.",
      tags: ["Data Analysis", "Python", "Visualization"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/vintiw6/Football-Data-Analysis",
      demo: "https://github.com/vintiw6/Football-Data-Analysis/blob/main/Final_Analysis.md",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-pixel text-4xl text-accent-secondary mb-4">Quest Log</h2>
          <p className="font-mono text-text-secondary">Recent missions completed successfully.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PixelCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
                className="h-full min-h-[300px]"
                footer={
                  <div className="flex gap-2">
                    <PixelButton 
                      variant="secondary" 
                      className="flex-1 text-sm py-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-3 h-3 mr-1 inline" /> Code
                    </PixelButton>
                    <PixelButton 
                      className="flex-1 text-sm py-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-3 h-3 mr-1 inline" /> Demo
                    </PixelButton>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
