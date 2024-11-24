"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Lightbulb, Rocket, Server, Gamepad } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Especialista em React, Next.js e TypeScript",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express e APIs RESTful",
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB, PostgreSQL e Redis",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Figma e Design Systems",
  },
];

const featuredProjects = [
  {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
    category: "Full Stack",
  },
  {
    title: "Portfolio Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Frontend",
  },
  {
    title: "API Gateway",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    category: "Backend",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&auto=format&fit=crop&q=80"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Desenvolvedor Full Stack &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  UI Designer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Criando experiências digitais excepcionais com código e design
              </p>
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Rocket className="h-5 w-5" />
                Ver Projetos
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Featured Projects */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Lightbulb className="h-8 w-8 text-blue-500" />
            Projetos em Destaque
          </motion.h2>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                className="group relative aspect-video overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-sm text-blue-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Code className="h-8 w-8 text-blue-500" />
            Habilidades & Tecnologias
          </motion.h2>
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={item}
                  className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors"
                >
                  <Icon className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Interactive Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-lg border border-border bg-card p-8"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Experimente o Minigame
              </h2>
              <p className="text-muted-foreground mb-6">
                Teste suas habilidades no jogo da memória e desbloqueie conquistas especiais
              </p>
              <Link
                href="/minigames"
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/20 transition-colors"
              >
                <Gamepad className="h-5 w-5" />
                Jogar Agora
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 h-64 w-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -right-10 -bottom-10 h-32 w-32 bg-purple-500/10 rounded-full blur-2xl" />
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}