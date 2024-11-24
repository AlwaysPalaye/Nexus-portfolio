"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

const CARDS = [
  "🎮", "🎮", "🎨", "🎨", "🎵", "🎵", "📚", "📚",
  "🎬", "🎬", "💻", "💻", "🎯", "🎯", "🎲", "🎲"
];

type CardType = {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
};

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

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...CARDS]
      .sort(() => Math.random() - 0.5)
      .map((content, index) => ({
        id: index,
        content,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  const handleCardClick = (id: number) => {
    if (
      flippedCards.length === 2 ||
      cards[id].isFlipped ||
      cards[id].isMatched
    ) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstId, secondId] = newFlippedCards;

      if (cards[firstId].content === cards[secondId].content) {
        newCards[firstId].isMatched = true;
        newCards[secondId].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);

        if (newCards.every((card) => card.isMatched)) {
          setIsWon(true);
        }
      } else {
        setTimeout(() => {
          newCards[firstId].isFlipped = false;
          newCards[secondId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={item} className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Jogo da Memória
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Movimentos: {moves}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={initializeGame}
              title="Reiniciar jogo"
            >
              <Shuffle className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-4 gap-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className={`aspect-square cursor-pointer transition-all duration-300 ${
                  card.isFlipped || card.isMatched
                    ? "bg-card"
                    : "bg-primary/10 hover:bg-primary/20"
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="h-full flex items-center justify-center text-4xl">
                  {(card.isFlipped || card.isMatched) ? card.content : "?"}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {isWon && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-card rounded-lg border border-border text-center"
          >
            <h2 className="text-2xl font-bold mb-2">Parabéns! 🎉</h2>
            <p className="text-muted-foreground mb-4">
              Você completou o jogo em {moves} movimentos!
            </p>
            <Button onClick={initializeGame}>Jogar Novamente</Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}