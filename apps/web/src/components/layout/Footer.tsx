"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:info@arcevo.io" },
  ];

  return (
    <footer className="relative w-full bg-[#050505] text-gray-300 border-t border-[#1E90FF]/20 backdrop-blur-md mt-10">
      {/* Glowing bar accent */}
      <motion.div
        initial={{ opacity: 0, width: "20%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0A84FF] to-[#1E90FF] shadow-[0_0_10px_#00BFFF]" />
          <span className="font-semibold text-white">
            Arcevo<span className="text-[#00BFFF]">Cirqle</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-[#00BFFF] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#00BFFF] transition-colors">
            Ecosystem
          </a>
          <a href="#" className="hover:text-[#00BFFF] transition-colors">
            Community
          </a>
          <a href="#" className="hover:text-[#00BFFF] transition-colors">
            About
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-5">
          {socials.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00BFFF] transition-all hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-[#1E90FF]/10" />

      {/* Bottom Info */}
      <div className="py-4 text-center text-xs text-gray-500">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} ArcevoCirqle. Built for creators, learners, and builders.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#00BFFF]/70 mt-1"
        >
          “Architects of Evolution.”
        </motion.p>
      </div>
    </footer>
  );
}
