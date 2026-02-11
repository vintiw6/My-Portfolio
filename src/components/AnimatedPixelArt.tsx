"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 20;
const GAME_TICK = 100; // ms

type Point = { x: number; y: number };

export function AnimatedPixelArt() {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 }); // Moving Right initially
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize Game
  useEffect(() => {
    setIsPlaying(true);
    // Client-side random food to avoid hydration mismatch
    setFood({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    });
  }, []);

  // Game Loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        // Simple AI: Move towards food
        const moves = [
          { x: 0, y: -1 }, // Up
          { x: 0, y: 1 },  // Down
          { x: -1, y: 0 }, // Left
          { x: 1, y: 0 },  // Right
        ];

        // Filter valid moves
        const validMoves = moves.filter((move) => {
          const nextX = head.x + move.x;
          const nextY = head.y + move.y;
          
          if (nextX < 0 || nextX >= GRID_SIZE || nextY < 0 || nextY >= GRID_SIZE) return false;
          if (prevSnake.some((segment) => segment.x === nextX && segment.y === nextY)) return false;

          return true;
        });

        // If no valid moves, game over (reset)
        if (validMoves.length === 0) {
           return [{ x: 10, y: 10 }]; // Reset snake
        }

        // Sort moves by distance to food
        validMoves.sort((a, b) => {
             const distA = Math.abs((head.x + a.x) - food.x) + Math.abs((head.y + a.y) - food.y);
             const distB = Math.abs((head.x + b.x) - food.x) + Math.abs((head.y + b.y) - food.y);
             return distA - distB;
        });
        
        // Pick best move
        const bestMove = validMoves[0];

        // Apply Move
        const newHead = { x: head.x + bestMove.x, y: head.y + bestMove.y };
        const newSnake = [newHead, ...prevSnake];

        // Check Food Collision
        if (newHead.x === food.x && newHead.y === food.y) {
          // Ate food: Keep tail (grow)
        } else {
          // Didn't eat: Remove tail
          newSnake.pop();
        }

        return newSnake;
      });
    }, GAME_TICK);

    return () => clearInterval(interval);
  }, [isPlaying, food]);

  // Handle Food Spawn
  useEffect(() => {
     const head = snake[0];
     if (head.x === food.x && head.y === food.y) {
         let newFood: Point;
         do {
            newFood = {
              x: Math.floor(Math.random() * GRID_SIZE),
              y: Math.floor(Math.random() * GRID_SIZE),
            };
         } while (snake.some(s => s.x === newFood.x && s.y === newFood.y));
         setFood(newFood);
     }
  }, [snake]);

  return (
    <div className="w-full h-full relative bg-panel-bg p-2 flex items-center justify-center overflow-hidden">
       {/* Game Container - Fills Parent */}
       <div className="relative w-full h-full border border-panel-border/30 bg-background/50 rounded-sm overflow-hidden">
          
          {/* Subtle Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)`,
                backgroundSize: `${100/GRID_SIZE}% ${100/GRID_SIZE}%`
            }}
          />

          {/* Snake */}
          {snake.map((segment, i) => (
            <motion.div
              key={`${i}-${segment.x}-${segment.y}`} // Key changes to trigger animation? Actually keep index for stability
              className={`absolute border border-background/20 ${i === 0 ? 'z-10 bg-accent-primary' : 'bg-accent-primary/80'}`}
              initial={false}
              animate={{
                left: `${(segment.x / GRID_SIZE) * 100}%`,
                top: `${(segment.y / GRID_SIZE) * 100}%`,
              }}
              transition={{ duration: 0.1, ease: "linear" }}
              style={{
                width: `${100 / GRID_SIZE}%`,
                height: `${100 / GRID_SIZE}%`,
              }}
            >
                {/* Eyes for head */}
                {i === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
                        <div className="w-[15%] h-[15%] bg-background rounded-full" />
                        <div className="w-[15%] h-[15%] bg-background rounded-full" />
                    </div>
                )}
            </motion.div>
          ))}

          {/* Food */}
          <motion.div
            className="absolute bg-accent-secondary"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{
                left: `${(food.x / GRID_SIZE) * 100}%`,
                top: `${(food.y / GRID_SIZE) * 100}%`,
                width: `${100 / GRID_SIZE}%`,
                height: `${100 / GRID_SIZE}%`,
                borderRadius: "20%" // Slightly rounded food
              }}
          >
             <div className="absolute inset-0 flex items-center justify-center text-[8px] text-background font-bold">
                 +
             </div>
          </motion.div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://transparenttextures.com/patterns/pixel-weave.png')] opacity-5"></div>
       </div>
    </div>
  );
}
