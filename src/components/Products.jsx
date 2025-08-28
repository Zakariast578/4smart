import { motion } from "framer-motion";
import qowsaarImg from "../assets/product2.jfif";
import { Card } from "./ui/card";

const products = [
  
  // Future products can be added here
  {
    img: qowsaarImg,
    title: "Qowsaar",
    description: "A comprehensive solution for tracking livestock location.",
    features: [
      "Boundary restriction",
      "Data logging",
      "GPS location",
      "GSM alerts",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-green-700 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white flex flex-col items-center text-center">
                <img src={product.img} alt={product.title} className="h-32 w-32 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-700">{product.title}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <ul className="text-gray-600 mb-2">
                    <h4 className="text-sm font-semibold mb-1">Features:</h4>
                  {product.features.map((feature) => (
                    <li key={feature} className="list-disc list-inside">{feature}</li>
                  ))}
                </ul>
                <span className="text-xs text-gray-400">More products coming soon...</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
