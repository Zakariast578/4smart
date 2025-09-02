import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import member1 from "../assets/teammember1.jpeg";
import member2 from "../assets/teammember2.jpeg";
import member3 from "../assets/teammember3.jpeg";
import member4 from "../assets/teammember4.JPG";
import member5 from "../assets/teammember5.jpeg";
import member6 from "../assets/teammember6.png";

const team = [
    {
        img: member6,
        name: "Iqra Ali",
        role: "CEO & Founder",
        bio: "Visionary leader with a passion for AgriTech innovation and sustainable growth.",
        specialties: ["Leadership", "Strategy", "AgriTech"],
    },
    {
        img: member5,
        name: "Zakaria Said",
        role: "CTO",
        bio: "Expert in IoT systems, data analytics, and smart device engineering.",
        specialties: ["IoT", "Backend", "Hardware"],
    },
    {
        img: member2,
        name: "Mohamed Adam",
        role: "Operations Manager",
        bio: "Ensures seamless field operations, logistics, and customer success.",
        specialties: ["Operations", "Logistics", "Support"],
    },
    {
        img: member3,
        name: "Yahye Abdirashid",
        role: "Lead Agronomist",
        bio: "Specialist in sustainable Somali agriculture and crop optimization.",
        specialties: ["Agronomy", "Soil Science", "Sustainability"],
    },
    {
        img: member1,
        name: "Muhidin Ahmed",
        role: "Product Designer",
        bio: "Designs intuitive and impactful user experiences for our AgriTech products.",
        specialties: ["UI/UX", "Prototyping", "User Research"],
    },
    {
        img: member4,
        name: "Abdimajid Ahmed",
        role: "Marketing Specialist",
        bio: "Drives our marketing strategies, brand awareness, and community engagement.",
        specialties: ["Digital Marketing", "Branding", "Content"],
    },
];

export default function Team() {
    return (
    <section id="team" className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                        Meet the Innovators
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        A dedicated team of experts committed to revolutionizing Somali agriculture.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col text-center rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white">
                                <CardHeader className="items-center pt-8">
                                    <Avatar className="h-24 w-24 mb-4 border-4 border-green-100 ml-24">
                                        <AvatarImage src={member.img} alt={member.name} />
                                        <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                                    <p className="text-sm font-medium text-green-600">{member.role}</p>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                                        {member.specialties.map((specialty) => (
                                            <Badge key={specialty} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
