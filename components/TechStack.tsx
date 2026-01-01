'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Technology {
  id: string;
  name: string;
  iconPath: string;
  category: string;
}

interface TechStackProps {
  technologies: Technology[];
}

const categoryColors: Record<string, string> = {
  'DevOps': 'bg-blue-100 text-blue-800',
  'Cloud': 'bg-purple-100 text-purple-800',
  'Languages': 'bg-green-100 text-green-800',
  'Databases': 'bg-orange-100 text-orange-800',
  'Tools': 'bg-pink-100 text-pink-800',
  'Frameworks': 'bg-indigo-100 text-indigo-800',
  'default': 'bg-gray-100 text-gray-800',
};

function TechIcon({ tech, index }: { tech: Technology; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative"
    >
      <div className="card p-6 flex flex-col items-center justify-center aspect-square hover:shadow-xl transition-all duration-300">
        {/* Icon */}
        <div className="relative w-16 h-16 mb-3">
          <Image
            src={tech.iconPath}
            alt={tech.name}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <p className="text-sm font-medium text-text-primary text-center">
          {tech.name}
        </p>

        {/* Category Badge */}
        <span
          className={`text-xs px-2 py-1 rounded-full mt-2 ${
            categoryColors[tech.category] || categoryColors.default
          }`}
        >
          {tech.category}
        </span>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-accent-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function TechStack({ technologies }: TechStackProps) {
  if (technologies.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-text-secondary mb-4">
          Add your technology stack icons to showcase your skills.
        </p>
        <p className="text-sm text-text-secondary">
          Place SVG icons in <code className="bg-primary-bg-secondary px-2 py-1 rounded">public/assets/icons/tech/</code>
        </p>
      </div>
    );
  }

  // Group by category
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <div className="space-y-12">
      {Object.entries(groupedTech).map(([category, techs]) => (
        <div key={category}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-heading font-semibold text-text-primary mb-6"
          >
            {category}
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techs.map((tech, index) => (
              <TechIcon key={tech.id} tech={tech} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
