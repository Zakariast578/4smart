import qowsaarImg from "../assets/product1.jfif";
import placeholderImg from "../assets/product2.jfif";
import { MapPin, Signal, Fence, Database } from "lucide-react";

export const products = [
  {
    id: "qowsaar",
    image: qowsaarImg,
    title: "Qowsaar Livestock Tracker",
    description:
      "A rugged, solar-powered IoT device providing real-time location, alerts, and data logging for your livestock.",
    LongDescription:
      "The Qowsaar Livestock Tracker is designed for the modern farmer, offering unparalleled insights into the location and well-being of your livestock. With its robust design and advanced features, you can ensure your animals are safe and accounted for at all times.",
    status: "available",
    features: [
      { name: "GPS Location", icon: MapPin },
      { name: "GSM Alerts", icon: Signal },
      { name: "Boundary Restriction", icon: Fence },
      { name: "Data Logging", icon: Database },
    ],
    specs: [
      { label: "Power", value: "Solar + Battery" },
      { label: "Connectivity", value: "GSM/GPRS" },
      { label: "Ingress", value: "IP67" },
    ],
  },
  {
    id: "pump",
    image: placeholderImg,
    title: "Smart Water Pump",
    description:
      "Automated water management for troughs and irrigation, conserving water and saving time.",
    status: "coming-soon",
    features: [],
    specs: [],
  },
];
