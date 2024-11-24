import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroBanner = () => {
  return (
    <motion.div 
      data-testid="hero-banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[60vh] min-h-[400px] overflow-hidden"
    >
      {/* Background Image - será substituída pela API do Unsplash */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      <Image
        src="/placeholder.jpg"  // Será substituído pela API do Unsplash
        alt="Banner Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Olá! Eu sou o Willian
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-200"
        >
          Developer e estrategista de marketing digital
        </motion.p>
      </div>
    </motion.div>
  );
};
