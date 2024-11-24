import { Github, Linkedin } from "lucide-react";
import { TechIcon } from "@/components/ui/tech-icon";

export default function Contact() {
  const frontendTech = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
    { name: "Radix UI", icon: "/icons/radix.svg" },
    { name: "Framer Motion", icon: "/icons/framermotion.svg" },
    { name: "Material UI", icon: "/icons/mui.svg" },
    { name: "shadcn/ui", icon: "/icons/shadcn.svg" },
    { name: "Lucide Icons", icon: "/icons/lucide.svg" },
  ];

  const backendTech = [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
  ];

  const devTools = [
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "ESLint", icon: "/icons/eslint.svg" },
    { name: "Vite", icon: "/icons/vite.svg" },
    { name: "Jest", icon: "/icons/jest.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">👋 Olá, eu sou Willian Marques</h1>
          <p className="text-xl text-muted-foreground">
            💻 Desenvolvedor Web | 🌍 Apaixonado por Tecnologia, Marketing e Desafios Criativos
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a 
              href="https://github.com/AlwaysPalaye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/marqueswillian/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sobre Mim */}
          <div className="space-y-6 p-6 rounded-lg bg-card border col-span-full">
            <h2 className="text-2xl font-semibold">🚀 Sobre Mim</h2>
            <p className="text-muted-foreground">
              Sou desenvolvedor apaixonado por tecnologia, mas também sou fã de marketing e como ele pode transformar ideias em algo grande. 
              Gosto de sempre integrar esses dois mundos para criar experiências únicas, seja através de websites, aplicações interativas, 
              ou plataformas que unem a engenharia com a estratégia. Em meu tempo livre, me apaixono por um bom café e adoro explorar novos desafios.
            </p>
          </div>

          {/* Stack Atual - Frontend */}
          <div className="space-y-6 p-6 rounded-lg bg-card border">
            <h2 className="text-2xl font-semibold">Frontend</h2>
            <div className="grid grid-cols-1 gap-2">
              {frontendTech.map((tech) => (
                <TechIcon key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          {/* Stack Atual - Backend */}
          <div className="space-y-6 p-6 rounded-lg bg-card border">
            <h2 className="text-2xl font-semibold">Backend e Serviços</h2>
            <div className="grid grid-cols-1 gap-2">
              {backendTech.map((tech) => (
                <TechIcon key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          {/* Stack Atual - Dev Tools */}
          <div className="space-y-6 p-6 rounded-lg bg-card border col-span-full">
            <h2 className="text-2xl font-semibold">Ferramentas de Desenvolvimento</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {devTools.map((tech) => (
                <TechIcon key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
