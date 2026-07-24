"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "tahia.mubin1@gmail.com",
    href: "mailto:tahia.mubin1@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+8801715549583",
    href: "tel:01715549583",
    icon: Phone,
  },
  // WhatsApp — uncomment and add your number when ready:
  // {
  //   label: "WhatsApp",
  //   value: "Chat on WhatsApp",
  //   href: "https://wa.me/8800000000000",
  //   icon: MessageCircle,
  // },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0B0F19] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#6C5CE7]">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#F1F2F6] sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-[#9CA3AF]">
            Have a project in mind or just want to say hi? My inbox is
            always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 rounded-2xl border border-[#2A2F42] bg-[#151A28] p-5 text-left transition-colors duration-200 hover:border-[#6C5CE7]/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6C5CE7]/15 text-[#8B7FF0]">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium text-[#9CA3AF]">
                    {method.label}
                  </span>
                  <span className="block text-sm font-semibold text-[#F1F2F6]">
                    {method.value}
                  </span>
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}