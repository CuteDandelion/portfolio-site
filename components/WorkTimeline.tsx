'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface WorkTimelineProps {
  experiences: WorkExperience[];
}

function TypewriterText({ text, isExpanded }: { text: string; isExpanded: boolean }) {
  const [displayedText, setDisplayedText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isExpanded && !hasAnimated) {
      setDisplayedText('');
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setHasAnimated(true);
        }
      }, 10); // Fast typing speed

      return () => clearInterval(interval);
    } else if (isExpanded && hasAnimated) {
      setDisplayedText(text);
    }
  }, [isExpanded, text, hasAnimated]);

  return <span>{isExpanded ? displayedText : ''}</span>;
}

function WorkItem({ experience }: { experience: WorkExperience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 border-l-2 border-border dark:border-gray-700 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent-blue dark:bg-blue-500 border-4 border-primary-bg dark:border-gray-900" />

      {/* Content */}
      <div className="card p-6 hover:shadow-lg transition-shadow">
        <button
          onClick={toggleExpand}
          className="w-full text-left focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-primary dark:text-gray-100 mb-1">
                {experience.position}
              </h3>
              <p className="text-lg text-accent-blue dark:text-blue-400 font-medium mb-2">
                {experience.company}
              </p>
              <p className="text-sm text-text-secondary dark:text-gray-400">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <svg
                className="w-6 h-6 text-text-secondary dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border dark:border-gray-700">
                <p className="text-text-primary dark:text-gray-200 mb-4 leading-relaxed">
                  <TypewriterText text={experience.description} isExpanded={isExpanded} />
                </p>

                {experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-text-primary dark:text-gray-100 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-accent-blue dark:text-blue-400 mt-1">▹</span>
                          <span className="text-text-secondary dark:text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {experience.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-gray-100 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.4 }}
                          className="px-3 py-1 bg-primary-bg-secondary dark:bg-gray-700 text-text-secondary dark:text-gray-300 text-sm rounded-full border border-border dark:border-gray-600"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function WorkTimeline({ experiences }: WorkTimelineProps) {
  if (experiences.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-text-secondary dark:text-gray-400">Add your work experiences to showcase your professional journey.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((experience) => (
        <WorkItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
