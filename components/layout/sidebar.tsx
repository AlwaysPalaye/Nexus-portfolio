"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  GamepadIcon, 
  FolderKanban,
  MessageSquareMore
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: Home, label: "Início", href: "/" },
  { icon: FolderKanban, label: "Projetos", href: "/projetos" },
  { icon: GamepadIcon, label: "Minigames", href: "/minigames" },
  { icon: MessageSquareMore, label: "Contato", href: "/contato" },
  { icon: User, label: "Perfil", href: "/perfil" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-16 md:w-60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border z-50">
      <div className="flex flex-col h-full py-4">
        <div className="px-3 py-2 mb-8">
          <h1 className="text-xl font-bold text-center hidden md:block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nexus+
          </h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors relative group",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="hidden md:block">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}