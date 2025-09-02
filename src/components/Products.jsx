import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Using shared catalog data
import { useState } from "react";
import { products as catalog } from "../data/products";
import ProductModal from "./ProductDetail";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Products() {
  const MotionDiv = motion.div;
  const [selected, setSelected] = useState(null);
  return (
  <section id="products" className="py-20 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Products
        </h2>
        <div className="mt-3 flex justify-center">
          <div className="w-24 border-b-4 border-green-600 rounded-full"></div>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Innovative IoT devices designed to empower Somali farmers and livestock keepers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {catalog.map((product, index) => (
          <MotionDiv
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-video w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <CardTitle className="text-xl font-semibold text-gray-800">{product.title}</CardTitle>
                  <CardDescription className="mt-2 flex-grow text-gray-600">
                    {product.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    {product.status === "available" ? (
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((f) => (
                          <Badge key={f.name} variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800">
                            <f.icon className="h-3.5 w-3.5" />
                            {f.name}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-800">Coming Soon</Badge>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg" onClick={() => setSelected(product)}>
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
