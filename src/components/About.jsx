import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import aboutImg from "../assets/aboutB.png";

// Animation variants for Framer Motion
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function About() {
    return (
    <section id="about" className="w-full py-16 md:py-24 bg-gray-50/50">
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
                        alt="Somali farmers using modern technology"
                        className="rounded-xl shadow-lg w-full h-auto object-cover aspect-square"
                    />
                </motion.div>

                {/* Content Column */}
                <div className="flex flex-col gap-8">
                    <motion.div
                        className="space-y-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
                            ABOUT
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* History Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.2 } } }}
                        >
                <Card className="rounded-xl bg-white shadow-md border-gray-200">
                                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">Our History</CardTitle>
                                </CardHeader>
                                <CardContent>
                    <p className="text-gray-600">
                                        4SMART was founded in Somalia with a vision to modernize agriculture and livestock farming. Starting as a small team of innovators, we developed affordable IoT devices to tackle critical challenges like livestock loss, low productivity, and climate stress.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Goal Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.4 } } }}
                        >
                <Card className="rounded-xl bg-green-50 shadow-md border-green-200 transition-all hover:shadow-lg hover:-translate-y-1">
                                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-800">Our Goal</CardTitle>
                                </CardHeader>
                                <CardContent>
                    <p className="text-gray-700">
                                        Our goal is to empower Somali farmers and herders with smart technology that improves efficiency, reduces risks, and creates sustainable agribusiness. By combining IoT, data, and local expertise, 4SMART aims to transform Somali agriculture into a model of innovation and resilience.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
