import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Satellite, Leaf, Droplets, Monitor } from "lucide-react";

const services = [
  {
    icon: <Satellite className="h-8 w-8 text-green-700" />,
    title: "IoT Livestock Tracking (Qowsaar Tracker)",
    desc: "Track livestock with GPS, GSM alerts, and boundary restriction.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-700" />,
    title: "Smart Greenhouse Monitoring",
    desc: "Monitor greenhouse conditions for optimal growth.",
  },
  {
    icon: <Droplets className="h-8 w-8 text-green-700" />,
    title: "Soil & Water Sensors",
    desc: "Real-time soil and water data for better farm management.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-green-700" />,
    title: "Farm Management Software",
    desc: "Digital tools to manage farm operations efficiently.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-green-700 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-gray-50 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-green-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
