import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquareText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';



// A simple WhatsApp icon component as lucide-react does not have one
const WhatsAppIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const ContactInfoItem = ({ icon, title, value, href }) => {
    const IconComponent = icon;
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-black/10"
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
            <IconComponent className="h-8 w-8 text-green-500" />
            <div>
                <p className="font-semibold text-lg text-stone-800">{title}</p>
                <p className="text-stone-600">{value}</p>
            </div>
        </motion.a>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: null }));
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(() => {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                }, 5000);
            }, (error) => {
                console.log(error.text);
                // Optionally, show an error message to the user
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
    <section id="contact" className="w-full py-20 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        Contact Us
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-green-600 mx-auto" />
                    <p className="mt-6 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
                        Reach out to 4SMART for partnership, support, or inquiries. We're here to help drive the future of agriculture in Somalia.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="flex flex-col space-y-8">
                        <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-900">Get in Touch</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col space-y-4">
                                <ContactInfoItem
                                    icon={WhatsAppIcon}
                                    title="WhatsApp"
                                    value="+252 61 332 8355"
                                    href="https://wa.me/252613328355"
                                />
                                <ContactInfoItem
                                    icon={Mail}
                                    title="Email"
                                    value="info@4smart.org.so"
                                    href="mailto:info@4smart.org.so"
                                />
                                <ContactInfoItem
                                    icon={Phone}
                                    title="Phone"
                                    value="+252 61 332 8355"
                                    href="tel:+252613328355"
                                />
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl text-stone-900">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center text-center p-8 min-h-[380px]">
                                        <MessageSquareText className="h-16 w-16 text-green-500 mb-4" />
                                        <h3 className="text-2xl font-semibold text-stone-800">Thank you!</h3>
                                        <p className="mt-2 text-stone-600">Your message has been sent successfully. We'll get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Label htmlFor="name" className="text-stone-700">Name</Label>
                                            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your Name" className="mt-2 bg-stone-100 border-stone-300 focus:ring-green-500" />
                                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="email" className="text-stone-700">Email</Label>
                                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="mt-2 bg-stone-100 border-stone-300 focus:ring-green-500" />
                                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="message" className="text-stone-700">Message</Label>
                                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="How can we help you?" className="mt-2 bg-stone-100 border-stone-300 focus:ring-green-500" />
                                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            Submit Message
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
