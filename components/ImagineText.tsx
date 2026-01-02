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
        className="relative"
      >
        {/* Decorative stars */}
        <motion.span
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl"
        >
          ✨
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.1 }}
          className="imagine-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 px-8 sm:px-12"
        >
          <span className="font-light">Why fix it when you can re</span>
          <span className="gradient-shimmer font-bold inline-block mx-1 sm:mx-2" style={{ fontSize: '1.2em' }}>
            imagine
          </span>
          <span className="font-light">it</span>
        </motion.h2>

        <motion.span
          initial={{ opacity: 0, rotate: 180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl"
        >
          ✨
        </motion.span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
        className="text-xl sm:text-2xl text-text-secondary dark:text-gray-300 italic font-light max-w-3xl mx-auto px-4"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
