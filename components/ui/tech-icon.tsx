import Image from "next/image";

interface TechIconProps {
  name: string;
  icon: string;
}

export function TechIcon({ name, icon }: TechIconProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors">
      <div className="relative w-6 h-6">
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-muted-foreground">{name}</span>
    </div>
  );
}
