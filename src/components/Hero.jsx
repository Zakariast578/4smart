import { Button } from "./ui/button";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 text-center text-white max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">4SMART – Smart Agriculture & IoT for Somalia</h1>
        <p className="text-lg md:text-2xl mb-8">Innovating Somali Farming & Livestock with IoT Solutions</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-green-700 text-white px-6 py-3 rounded-full"><a href="#services">Explore Services</a></Button>
          <Button variant="outline" className="bg-white text-green-700 px-6 py-3 rounded-full"><a href="#contact">Contact Us</a></Button>
        </div>
      </motion.div>
    </section>
  );
}
