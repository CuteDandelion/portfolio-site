'use client';

import { motion } from 'framer-motion';

interface ImagineTextProps {
  subtitle: string;
  delay?: number;
}

export default function ImagineText({ subtitle, delay = 0 }: ImagineTextProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="relative inline-block"
      >
        {/* Decorative stars */}
        <motion.span
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-3xl"
        >
          ✨
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.1 }}
          className="imagine-text text-4xl sm:text-5xl md:text-6xl mb-4"
          style={{
            textShadow: '0 0 15px rgba(192, 192, 192, 0.4)',
          }}
        >
          IMAGINE
        </motion.h2>

        <motion.span
          initial={{ opacity: 0, rotate: 180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-3xl"
        >
          ✨
        </motion.span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
        className="text-xl sm:text-2xl text-text-secondary italic font-light max-w-3xl mx-auto px-4"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
