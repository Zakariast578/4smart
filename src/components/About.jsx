import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import aboutImg from "../assets/aboutB.png";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function About() {
    const goals = [
        "Reduce livestock loss through smart tracking and monitoring.",
        "Increase productivity for farmers using IoT systems.",
        "Build scalable, sustainable technology solutions for Somali agriculture.",
        "Empower local communities with modern farming and livestock tools.",
    ];

    return (
        <section id="about" className="w-full py-16 md:py-24 bg-gray-50/50 dark:bg-black/10">
            <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
                {/* Image Column */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <img
                        src={aboutImg}
                        alt="Somali farmers with livestock"
                        className="rounded-xl shadow-lg w-full h-auto object-cover aspect-square"
                    />
                </motion.div>

                {/* Content Column */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { ...fadeIn.visible.transition, delay: 0.2 } } }}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">
                            About 4SMART
                        </h2>
                        <p className="text-gray-600  text-lg">
                            4SMART is a Somali startup providing IoT and smart solutions for agriculture and livestock. We empower farmers with affordable technology to reduce livestock loss, increase productivity, and build sustainable agribusiness.
                        </p>
                    </div>

                    <Tabs defaultValue="mission" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-gray-500/60 dark:bg-gray-800">
                            <TabsTrigger value="mission">Mission</TabsTrigger>
                            <TabsTrigger value="vision">Vision</TabsTrigger>
                            <TabsTrigger value="goals">Goals</TabsTrigger>
                        </TabsList>
                        <Card className="mt-4 rounded-lg border-none bg-transparent shadow-none">
                            <TabsContent value="mission" className="p-1">
                                <p className="text-gray-700 ">
                                    To provide innovative IoT solutions that help Somali farmers and livestock owners increase efficiency, protect their assets, and modernize traditional farming practices.
                                </p>
                            </TabsContent>
                            <TabsContent value="vision" className="p-1">
                                <p className="text-gray-700 ">
                                    To become the leading AgriTech provider in Somalia, creating a sustainable, technologically advanced agricultural ecosystem.
                                </p>
                            </TabsContent>
                            <TabsContent value="goals" className="p-1">
                                <ul className="space-y-2 text-gray-700 ">
                                    {goals.map((goal, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{goal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </TabsContent>
                        </Card>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
}
