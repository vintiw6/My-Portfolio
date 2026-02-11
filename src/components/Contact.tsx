"use client";

import React from "react";
import { motion } from "framer-motion";
import { PixelPanel } from "./PixelPanel";
import { PixelButton } from "./PixelButton";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background pb-32">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <PixelPanel className="bg-panel-bg shadow-xl">
            <div className="text-center space-y-6 py-8">
              <h2 className="font-pixel text-4xl text-accent-primary mb-2">New Message!</h2>
              <p className="font-mono text-text-secondary max-w-lg mx-auto">
                Ready to collaborate on the next big project? Send a transmission or connect via the network.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 px-8">
                <PixelButton 
                  onClick={() => window.location.href = "mailto:contact.vinayaktiwari@gmail.com"}
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </PixelButton>
                
                <PixelButton 
                  variant="secondary"
                  onClick={() => window.open("https://www.linkedin.com/in/vintiw6", "_blank")}
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </PixelButton>
                
                <PixelButton 
                  variant="secondary"
                  onClick={() => window.open("https://github.com/vintiw6", "_blank")}
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </PixelButton>
                
                <PixelButton 
                  variant="secondary"
                  onClick={() => window.open("https://drive.google.com/file/d/1OkeF1NU-rb6HB3Y-ySoV0-0wyTzP-KI0/view?usp=sharing", "_blank")}
                  className="flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Resume
                </PixelButton>
              </div>

              <div className="mt-8 pt-4 border-t border-dashed border-panel-border">
                <p className="font-mono text-xs text-text-secondary animate-pulse">
                  System Status: Waiting for connection...
                </p>
              </div>
            </div>
          </PixelPanel>
        </motion.div>
      </div>
    </section>
  );
}
