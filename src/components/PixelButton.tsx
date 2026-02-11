"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // We need to create lib/utils for clsx/tailwind-merge

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  isLoading?: boolean;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "primary", isLoading, children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-accent-primary text-background border-accent-secondary hover:bg-accent-secondary",
      secondary: "bg-panel-bg text-foreground border-panel-border hover:border-accent-primary",
      danger: "bg-red-500 text-white border-red-700 hover:bg-red-600",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative px-6 py-2 font-pixel tracking-wide uppercase transition-colors pixel-border",
          "focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:ring-offset-2 focus:ring-offset-background",
          variants[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="animate-pulse">Loading...</span>
          </span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

PixelButton.displayName = "PixelButton";

export { PixelButton };
