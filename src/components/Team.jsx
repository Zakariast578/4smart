import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { motion } from "framer-motion";
import member1 from "../assets/teammember1.jpeg";
import member2 from "../assets/teammember2.jpeg";
import member3 from "../assets/teammember3.jpeg";
import member4 from "../assets/teammember4.JPG";
import member5 from "../assets/teammember5.jpeg";
import member6 from "../assets/teammember6.png"; // Assuming a new image for the 6th member

const team = [
    {
        img: member6,
        name: "Iqra Ali",
        role: "CEO & Founder",
        bio: "Visionary leader with a passion for AgriTech innovation.",
    },
    {
        img: member5,
        name: "Zakaria Said",
        role: "CTO",
        bio: "Expert in IoT systems and smart device engineering.",
    },
    {
        img: member2,
        name: "Mohamed Adam",
        role: "Operations Manager",
        bio: "Ensures smooth operations and customer success.",
    },
    {
        img: member3,
        name: "Yahye Abdirashid",
        role: "Lead Agronomist",
        bio: "Specialist in sustainable Somali agriculture.",
    },
    {
        img: member1,
        name: "Muhidin Ahmed",
        role: "Product Designer",
        bio: "Designs intuitive and impactful AgriTech products.",
    },
    {
        img: member4,
        name: "Abdimajid Ahmed",
        role: "Marketing Specialist",
        bio: "Drives marketing strategies and brand awareness.",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-green-800 text-center">
                    Our Team at 4SMART
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white flex flex-col items-center text-center h-full">
                                <Avatar className="h-24 w-24 mb-4 border-2 border-green-200">
                                    <AvatarImage src={member.img} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-lg font-semibold mb-1 text-green-800">{member.name}</h3>
                                <span className="text-sm text-yellow-600 font-medium mb-3">{member.role}</span>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
