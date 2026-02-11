"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelButton } from "./PixelButton";
import { PixelPanel } from "./PixelPanel";
import { ArrowRight, Download, Mail } from "lucide-react";
import { AnimatedPixelArt } from "./AnimatedPixelArt";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 py-20 px-4">
      {/* Left: Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
      >
        <div className="inline-block px-3 py-1 bg-accent-primary/20 border border-accent-primary text-accent-primary font-pixel text-sm rounded-none">
          Open to Work
        </div>
        
        <h1 className="text-4xl md:text-6xl font-pixel text-text-primary leading-tight">
          Hi, I'm <span className="text-accent-secondary">Vinayak Tiwari</span>
        </h1>
        
        <div className="text-xl md:text-2xl font-mono text-text-secondary h-8">
          <Typewriter text="Front End Developer | Data Scientist" speed={100} />
        </div>
        
        <p className="max-w-md text-text-secondary leading-relaxed font-mono">
          Building intelligent and interactive digital experiences with a retro touch.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <PixelButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </PixelButton>
          <PixelButton variant="secondary" onClick={() => window.open("https://drive.google.com/file/d/1OkeF1NU-rb6HB3Y-ySoV0-0wyTzP-KI0/view?usp=sharing", "_blank")}>
            Resume <Download className="inline-block ml-2 w-4 h-4" />
          </PixelButton>
        </div>
      </motion.div>

      {/* Center/Right: Avatar & Status Panel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 flex flex-col items-center justify-center relative"
      >
        {/* Pixel Avatar Placeholder */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 pixel-box bg-panel-bg flex items-center justify-center overflow-hidden mb-8 group">
           <AnimatedPixelArt />
        </div>

        {/* Floating Status Panel */}
        <PixelPanel className="absolute -bottom-6 -right-4 md:right-10 w-48 z-10 bg-panel-bg/95 backdrop-blur-sm">
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between">
              <span>HP</span>
              <div className="w-20 h-3 bg-gray-800 border border-gray-600 relative">
                <div className="absolute top-0 left-0 h-full bg-green-500 w-[100%]"></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span>MP</span>
              <div className="w-20 h-3 bg-gray-800 border border-gray-600 relative">
                <div className="absolute top-0 left-0 h-full bg-blue-500 w-[80%]"></div>
              </div>
            </div>
          </div>
        </PixelPanel>
      </motion.div>
    </section>
  );
}

// Simple Typewriter Component
function Typewriter({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = React.useState("");
  
  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return <span>{displayText}<span className="animate-pulse">_</span></span>;
}
