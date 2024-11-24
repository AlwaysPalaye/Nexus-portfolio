"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Timer, Brain } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const achievements = [
  {
    title: "Primeira Vitória",
    description: "Complete seu primeiro jogo da memória",
    icon: Trophy,
    unlocked: true,
  },
  {
    title: "Velocista",
    description: "Complete um jogo em menos de 30 segundos",
    icon: Timer,
    unlocked: false,
  },
  {
    title: "Mestre da Memória",
    description: "Vença 10 jogos sem erros",
    icon: Brain,
    unlocked: false,
  },
  {
    title: "Colecionador",
    description: "Desbloqueie 5 conquistas",
    icon: Star,
    unlocked: false,
  },
];

const stats = [
  {
    title: "Jogos Completados",
    value: "12",
    description: "Últimos 30 dias",
  },
  {
    title: "Melhor Tempo",
    value: "45s",
    description: "Recorde pessoal",
  },
  {
    title: "Conquistas",
    value: "1/10",
    description: "Desbloqueadas",
  },
];

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

export default function Profile() {
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
          Meu Perfil
        </motion.h1>

        <Tabs defaultValue="stats" className="space-y-6">
          <TabsList>
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
          </TabsList>

          <TabsContent value="stats">
            <motion.div
              variants={container}
              className="grid gap-6 md:grid-cols-3"
            >
              {stats.map((stat) => (
                <motion.div key={stat.title} variants={item}>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements">
            <motion.div
              variants={container}
              className="grid gap-6 md:grid-cols-2"
            >
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <motion.div key={achievement.title} variants={item}>
                    <Card className={achievement.unlocked ? "bg-card" : "bg-muted"}>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className={`p-2 rounded-full ${achievement.unlocked ? "bg-primary/10 text-primary" : "bg-muted-foreground/10 text-muted-foreground"}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className={`text-lg ${!achievement.unlocked && "text-muted-foreground"}`}>
                            {achievement.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}