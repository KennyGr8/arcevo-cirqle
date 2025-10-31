"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll and toggle animation state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    {
      name: "Ecosystem",
      href: "#",
      sublinks: ["ArcID", "ArcevoLearn", "ArcevoConnect"],
    },
    {
      name: "Community",
      href: "#",
      sublinks: ["Creators", "Builders", "Collaborations"],
    },
    { name: "About", href: "#" },
  ];

  return (
    <motion.header
      initial={{ width: "95%", y: -40, opacity: 0 }}
      animate={{
        width: scrolled ? "75%" : "95%",
        y: 0,
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/60 border border-[#1E90FF]/20 shadow-[0_0_30px_#00BFFF20] rounded-full px-6 py-3 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#1E90FF] shadow-[0_0_10px_#00BFFF]" />
        <span className="font-semibold text-white">
          Arcevo<span className="text-[#00BFFF]">Cirqle</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            <a
              href={link.href}
              className="text-gray-300 hover:text-[#00BFFF] text-sm transition-colors"
            >
              {link.name}
            </a>
            {link.sublinks && (
              <div className="absolute hidden group-hover:flex flex-col top-full left-0 mt-2 bg-black/80 rounded-lg border border-[#1E90FF]/20 shadow-lg p-2 space-y-2 backdrop-blur-md">
                {link.sublinks.map((sublink) => (
                  <a
                    key={sublink}
                    href="#"
                    className="text-gray-400 hover:text-[#00BFFF] text-sm transition-colors"
                  >
                    {sublink}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* CTA Button (Desktop) */}
      <div className="hidden md:block">
        <Button className="bg-gradient-to-r from-[#00BFFF] to-[#0A84FF] text-white rounded-full px-5 py-1.5 shadow-[0_0_15px_#00BFFF70] hover:shadow-[0_0_25px_#00BFFF] transition-all">
          Join Now
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Drawer direction="top">
          <DrawerTrigger asChild>
            <button className="p-2 rounded-full bg-[#1E1E1E]/50 border border-[#1E90FF]/30 hover:bg-[#1E1E1E]/70 transition">
              <Menu className="w-5 h-5 text-[#00BFFF]" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-[#0D0D0D]/95 text-gray-200 backdrop-blur-md border-b border-[#1E90FF]/20">
            <DrawerHeader>
              <DrawerTitle className="text-center text-[#00BFFF] text-lg">
                ArcevoCirqle
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <div key={link.name} className="text-center w-full">
                  <details className="group">
                    <summary className="cursor-pointer py-2 text-sm font-medium hover:text-[#00BFFF]">
                      {link.name}
                    </summary>
                    {link.sublinks && (
                      <div className="flex flex-col space-y-1 pt-2">
                        {link.sublinks.map((sublink) => (
                          <a
                            key={sublink}
                            href="#"
                            className="text-gray-400 hover:text-[#00BFFF] text-sm transition-colors"
                          >
                            {sublink}
                          </a>
                        ))}
                      </div>
                    )}
                  </details>
                </div>
              ))}
              <Button className="mt-3 bg-gradient-to-r from-[#00BFFF] to-[#0A84FF] text-white rounded-full px-6 py-1.5 shadow-[0_0_15px_#00BFFF70] hover:shadow-[0_0_25px_#00BFFF] transition-all">
                Join Now
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.header>
  );
}
