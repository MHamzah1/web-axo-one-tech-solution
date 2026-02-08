"use client";

import React from "react";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const sizes = {
    sm: { icon: 32, text: "text-lg" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
        >
          {/* Outer hexagon */}
          <motion.path
            d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Inner A shape */}
          <motion.path
            d="M50 20L75 70H65L58 55H42L35 70H25L50 20Z"
            fill="url(#gradient2)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Inner horizontal bar of A */}
          <motion.rect
            x="38"
            y="45"
            width="24"
            height="4"
            rx="2"
            fill="#0a0a0a"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Tech circuit lines */}
          <motion.path
            d="M15 50H25M85 50H75M50 15V25M50 85V75"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />

          {/* Circuit dots */}
          <motion.circle
            cx="15"
            cy="50"
            r="3"
            fill="#8b5cf6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          />
          <motion.circle
            cx="85"
            cy="50"
            r="3"
            fill="#ec4899"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          />
          <motion.circle
            cx="50"
            cy="15"
            r="3"
            fill="#06b6d4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.7 }}
          />
          <motion.circle
            cx="50"
            cy="85"
            r="3"
            fill="#8b5cf6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          />

          <defs>
            <linearGradient
              id="gradient1"
              x1="10"
              y1="5"
              x2="90"
              y2="95"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8b5cf6" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient
              id="gradient2"
              x1="25"
              y1="20"
              x2="75"
              y2="70"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 -z-10" />
      </div>

      {/* Logo Text */}
      {showText && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span
            className={`${text} font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent`}
          >
            AxoIndo
          </span>
          <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">
            Tech Solution
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
