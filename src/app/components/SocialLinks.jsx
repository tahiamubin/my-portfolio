"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDev, FaMedium, FaStackOverflow } from "react-icons/fa";
import { MdEmail, MdOutlineShare } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/tahiamubin",
    icon: FaGithub,
    color: "#6C5CE7",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tahia-mubin-736bb53b4/",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "Email",
    href: "mailto:tahia.mubin1@gmail.com",
    icon: MdEmail,
    color: "#EA4335",
  },
 
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <motion.div
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="text-[#6C5CE7]"
        >
          <MdOutlineShare size={18} />
        </motion.div>
        <span className="text-xs font-medium uppercase tracking-widest text-[#9CA3AF]">
          Connect with me
        </span>
        <div className="h-px w-8 bg-gradient-to-r from-[#6C5CE7] to-transparent" />
      </motion.div>

      {/* Social icons grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {SOCIAL_LINKS.map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: i * 0.08,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                y: -6,
                scale: 1.1,
                boxShadow: `0 8px 25px ${social.color}40`,
                borderColor: social.color,
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2F42] bg-[#151A28] text-[#9CA3AF] transition-all duration-300 hover:text-white"
              style={{
                boxShadow: `0 0 20px ${social.color}00`,
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                style={{ 
                  background: `radial-gradient(circle at center, ${social.color}, transparent 70%)`,
                }}
              />
              
              {/* Icon with gradient on hover */}
              <Icon 
                size={19} 
                className="relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{
                  color: 'currentColor',
                }}
              />
              
              {/* Tooltip on hover */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-[#1E2436] px-2 py-1 text-xs text-[#F1F2F6] opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap border border-[#2A2F42]">
                {social.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1E2436] border-r border-b border-[#2A2F42]" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Decorative divider with animation */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "120px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center gap-3"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2A2F42]" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-1.5 w-1.5 rounded-full bg-[#6C5CE7]"
        />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2A2F42]" />
      </motion.div>

      {/* Contact text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xs text-[#9CA3AF]"
      >
        Let's connect and build something amazing together!
      </motion.p>
    </div>
  );
}