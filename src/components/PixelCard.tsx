"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelCardProps extends HTMLMotionProps<"div"> {
  title: string;
  description?: string;
  tags?: string[];
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, title, description, tags, icon, footer, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4, boxShadow: "6px 6px 0 0 rgba(0,0,0,0.4)" }}
        className={cn(
          "bg-panel-bg border-2 border-panel-border p-4 flex flex-col gap-4 h-full",
          "hover:border-accent-primary transition-colors",
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <h3 className="font-pixel text-2xl text-accent-secondary">{title}</h3>
          {icon && <div className="text-accent-highlight">{icon}</div>}
        </div>

        {description && (
          <p className="font-mono text-base text-text-secondary flex-grow">
            {description}
          </p>
        )}

        {children}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-pixel px-2 py-1 bg-background border border-panel-border text-text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {footer && <div className="mt-4 pt-4 border-t-2 border-panel-border">{footer}</div>}
      </motion.div>
    );
  }
);

PixelCard.displayName = "PixelCard";

export { PixelCard };
