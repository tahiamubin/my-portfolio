"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { MdOutlineArrowUpward } from "react-icons/md";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0F19] border-t border-[#2A2F42] overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#6C5CE7]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#A29BFE]/5 blur-[120px]" />

      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6C5CE7]/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="#home" className="inline-block">
              <h3 className="text-xl font-bold text-[#F1F2F6]">
                Tahia<span className="text-[#6C5CE7]">.</span>Mubin
              </h3>
            </Link>
            <p className="text-sm text-[#9CA3AF] max-w-xs">
              Building fast, scalable, and user-friendly web experiences with
              modern technologies.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <FaCode size={12} className="text-[#6C5CE7]" />
              <span>Full-Stack Developer</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F1F2F6]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9CA3AF] transition-colors duration-200 hover:text-[#6C5CE7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F1F2F6]">
              Connect With Me
            </h4>
            <SocialLinks className="justify-start" />
            <p className="text-xs text-[#9CA3AF]">
              Available for collaborations and opportunities
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-[#2A2F42] to-transparent"
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs text-[#9CA3AF]">
            &copy; {currentYear} Tahia Mubin. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
              Made with
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-[#FD79A8]"
              >
                <FaHeart size={12} />
              </motion.span>
              using
              <span className="text-[#6C5CE7]">Next.js</span>
            </span>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                y: -4,
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(108, 92, 231, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A2F42] bg-[#151A28] text-[#9CA3AF] transition-all duration-200 hover:border-[#6C5CE7] hover:text-[#6C5CE7]"
              aria-label="Back to top"
            >
              <MdOutlineArrowUpward size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative corner elements */}
        <div className="absolute -bottom-4 -right-4 h-16 w-16 overflow-hidden opacity-20">
          <div className="absolute -bottom-8 -right-8 h-16 w-16 rotate-45 bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE]" />
        </div>
        <div className="absolute -top-4 -left-4 h-16 w-16 overflow-hidden opacity-20">
          <div className="absolute -top-8 -left-8 h-16 w-16 rotate-45 bg-gradient-to-r from-[#A29BFE] to-[#6C5CE7]" />
        </div>
      </div>
    </footer>
  );
}