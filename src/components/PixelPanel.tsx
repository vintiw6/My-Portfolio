"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

const PixelPanel = React.forwardRef<HTMLDivElement, PixelPanelProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative bg-panel-bg text-foreground pixel-box p-1",
          className
        )}
        {...props}
      >
        {/* Panel Header */}
        {title && (
          <div className="bg-panel-border text-text-primary px-4 py-2 font-pixel uppercase tracking-wider mb-4 border-b-2 border-background">
            {title}
          </div>
        )}
        
        {/* Panel Content */}
        <div className="p-4">
          {children}
        </div>
      </motion.div>
    );
  }
);

PixelPanel.displayName = "PixelPanel";

export { PixelPanel };
