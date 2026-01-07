"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault(); // Stop the default instant jump
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "works", label: "Works" },
  ];

  return (
    // 'sticky top-0' makes it stick. 'z-50' ensures it floats above content.
    <nav className="sticky top-0 z-50 flex w-full max-w-7xl mx-auto items-center justify-end px-8 py-10 mix-blend-difference">
      <div className="flex gap-15 text-2xl font-bold text-foreground">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleScroll(e, link.id)}
            className={`relative transition-colors duration-300 ${
              activeSection === link.id ? "text-foreground" : "text-navText hover:text-foreground"
            }`}
          >
            {link.label}

            {/* Moving Underline Effect */}
            {/* {activeSection === link.id && (
              <motion.span
                layoutId="underline-none"
                className="absolute left-0 top-full block h-[2px] w-full bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )} */}
          </Link>
        ))}
      </div>
    </nav>
  );
}