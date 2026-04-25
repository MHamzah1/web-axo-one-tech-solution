"use client";

import React from "react";
import Image from "next/image";
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
    sm: { icon: 80, text: "text-base", subText: "text-[10px]" },
    md: { icon: 90, text: "text-xl", subText: "text-xs" },
    lg: { icon: 100, text: "text-2xl", subText: "text-sm" },
  };

  const { icon, text, subText } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Image */}
      <div className="relative flex-shrink-0">
        <Image
          src="/logo/logo-axo.png"
          alt="AxoIndo Tech Solution Logo"
          width={icon}
          height={icon}
          className="object-contain drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          priority
        />
        {/* Glow effect */}
        <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 -z-10 rounded-full" />
      </div>

      {/* Logo Text */}
      {showText && (
        <motion.div
          className="flex flex-col leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span
            className={`${text} font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent`}
          >
            AxoIndo
          </span>
          <span className={`${subText} font-semibold text-gray-400 tracking-[0.2em] uppercase`}>
            Tech Solution
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo;
