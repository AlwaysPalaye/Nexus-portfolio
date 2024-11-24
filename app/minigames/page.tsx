"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Minigames() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Minigames
        </motion.h1>

        <motion.div variants={item}>
          <Link href="/minigames/memoria">
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:bg-card/80 transition-colors">
              <div className="p-6">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Jogo da Memória</h2>
                <p className="text-muted-foreground">
                  Teste sua memória e ganhe conquistas especiais completando os desafios
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}