import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Submitted:', formData);
            // Here you would typically integrate with an email service like EmailJS
            setIsSubmitted(true);
            // Reset form after a delay
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 5000);
        }
    };

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
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section
            id="contact"
            className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-stone-100 dark:bg-stone-900"
            style={{
                backgroundImage: `url('./assets/bg.jfif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative max-w-7xl mx-auto">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-stone-300">
                        We'd love to hear from you. Reach out to us for partnerships, investments, or any inquiries.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Contact Information Card */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col space-y-8">
                                <motion.a
                                    href="https://wa.me/252613328355"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-white/20"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <Smartphone className="h-8 w-8 text-green-400" />
                                    <div>
                                        <p className="font-semibold">WhatsApp</p>
                                        <p className="text-stone-300">+252 61 332 8355</p>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="mailto:info@4smart.org.so"
                                    className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-white/20"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <Mail className="h-8 w-8 text-green-400" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-stone-300">info@4smart.org.so</p>
                                    </div>
                                </motion.a>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                        >
                                            <h3 className="text-xl font-semibold text-green-400">Thank You!</h3>
                                            <p className="mt-2 text-stone-300">Your message has been sent successfully. We will get back to you soon.</p>
                                        </motion.div>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Label htmlFor="name" className="text-stone-300">Name</Label>
                                            <Input id="name" type="text" value={formData.name} onChange={handleChange} className="mt-2 bg-white/5 border-white/20 text-white focus:ring-green-500" />
                                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="email" className="text-stone-300">Email</Label>
                                            <Input id="email" type="email" value={formData.email} onChange={handleChange} className="mt-2 bg-white/5 border-white/20 text-white focus:ring-green-500" />
                                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="message" className="text-stone-300">Message</Label>
                                            <Textarea id="message" value={formData.message} onChange={handleChange} rows={5} className="mt-2 bg-white/5 border-white/20 text-white focus:ring-green-500" />
                                            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                                        </div>
                                        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg">
                                            Submit
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
