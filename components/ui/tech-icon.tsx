'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface TechIconProps {
  name: string;
  icon: string;
}

export function TechIcon({ name, icon }: TechIconProps) {
  return (
    <motion.div 
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="relative w-6 h-6"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
        />
      </motion.div>
      <span className="text-muted-foreground">{name}</span>
    </motion.div>
  );
}
