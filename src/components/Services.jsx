import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { RadioTower, Sprout, Droplet, Laptop } from "lucide-react";

const services = [
  {
    icon: <RadioTower className="h-10 w-10 text-green-700" />,
    title: "IoT Livestock Tracking (Qowsaar Tracker)",
    desc: "Smart GPS collars for livestock monitoring, alerts, and boundary tracking.",
  },
  {
    icon: <Sprout className="h-10 w-10 text-green-700" />,
    title: "Smart Greenhouse Monitoring",
    desc: "IoT-enabled greenhouse system for temperature, humidity, and irrigation control.",
  },
  {
    icon: <Droplet className="h-10 w-10 text-green-700" />,
    title: "Soil & Water Sensors",
    desc: "Advanced soil and water monitoring for precision agriculture and improved yield.",
  },
  {
    icon: <Laptop className="h-10 w-10 text-green-700" />,
    title: "Farm Management Software",
    desc: "Digital tools to track farming activities, analyze data, and boost efficiency.",
  },
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
  <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Our Services
          </h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-green-600 to-yellow-600 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative IoT solutions designed for Somali farmers and livestock keepers.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:shadow-green-200/50 transition-all duration-300 ease-in-out">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
