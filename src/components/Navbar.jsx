import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="4SMART Logo" className="h-8 w-8 rounded-full" />
                    <span className="font-bold text-xl text-green-700 dark:text-green-400"><span className="text-orange-700 dark:text-orange-400">4</span>SMART</span>
                </div>
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 font-medium transition">
                            {link.name}
                        </a>
                    ))}
                    <Button asChild className="rounded-full bg-green-700 text-white px-5 py-2 hover:bg-green-800">
                        <a href="https://wa.me/252613328355" target="_blank" rel="noopener noreferrer">Get in Touch</a>
                    </Button>
                    <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>
            {open && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-2 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 font-medium transition py-2">
                            {link.name}
                        </a>
                    ))}
                    <Button asChild className="rounded-full bg-green-700 text-white px-5 py-2 mt-2 hover:bg-green-800">
                        <a href="https://wa.me/252613328355" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get in Touch</a>
                    </Button>
                </div>
            )}
        </nav>
    );
}
