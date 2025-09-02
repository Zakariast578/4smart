import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "../assets/hero-bg.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-green-400 to-yellow-600 bg-clip-text text-transparent">
              4SMART – Smart Agriculture
            </span>
            <span className="block"> & IoT for Somalia</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl"
            variants={itemVariants}
          >
            Innovating Somali Farming & Livestock with IoT Solutions
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
            variants={itemVariants}
          >
            <Button
              asChild
              className="w-full transform rounded-full bg-green-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-green-500/40 sm:w-auto"
            >
              <a href="#services">Explore Services</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full transform rounded-full border-2 border-neutral-400 bg-transparent px-8 py-6 text-lg font-semibold text-neutral-200 transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </a>
      </motion.div>
    </section>
  );
}
