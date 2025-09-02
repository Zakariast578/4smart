import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
];

const NavLink = ({ name, href, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="relative text-gray-700 hover:text-green-700 font-medium transition-colors group"
    >
        {name}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
    </a>
);

const MobileNavLink = ({ name, href, onClick }) => (
     <a
        href={href}
        onClick={onClick}
        className="block w-full text-center text-2xl font-medium text-gray-800 py-4"
    >
        {name}
    </a>
);


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menuVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
        exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-sm"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="4SMART Logo" className="h-10 w-10 rounded-full" />
                        <span className="font-bold text-2xl text-green-700">
                            <span className="text-orange-700">4</span>SMART
                        </span>
                    </div>
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} {...link} />
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                         <Button asChild className="rounded-full bg-green-700 text-white px-6 py-2 shadow-md hover:bg-green-800 hover:shadow-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300">
                            <a href="https://wa.me/252613328355" target="_blank" rel="noopener noreferrer">Get in Touch</a>
                        </Button>
                    </div>
                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-white p-4 md:hidden"
                    >
                        <div className="flex justify-end mb-8">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="h-7 w-7" />
                            </Button>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6">
                            {navLinks.map((link) => (
                                <MobileNavLink key={link.name} {...link} onClick={() => setOpen(false)} />
                            ))}
                            <Button asChild size="lg" className="rounded-full bg-green-700 text-white px-8 py-3 mt-6 text-lg hover:bg-green-800">
                                <a href="https://wa.me/252613328355" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get in Touch</a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
