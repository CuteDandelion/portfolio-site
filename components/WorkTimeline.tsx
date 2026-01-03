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
  highlight?: string;
  category?: 'security' | 'data' | 'devops' | 'development' | 'learning';
}

interface WorkTimelineProps {
  experiences: WorkExperience[];
}

// Category color gradients
const categoryGradients: Record<string, string> = {
  security: 'bg-gradient-to-r from-red-500 to-orange-500',
  data: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  devops: 'bg-gradient-to-r from-purple-500 to-blue-500',
  development: 'bg-gradient-to-r from-green-500 to-teal-500',
  learning: 'bg-gradient-to-r from-indigo-500 to-purple-500',
};

// Helper function to highlight achievements with metrics and technologies with subtle underlines
function highlightText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  // Match achievement phrases with metrics (e.g., "by 50%", "reduced latency by 30%")
  // Captures context around the percentage/metric for better readability
  const achievementPattern = /(\w+(?:\s+\w+){0,4}\s+by\s+\d+(?:\.\d+)?%|\w+(?:\s+\w+){0,4}\s+to\s+\d+(?:\.\d+)?%|increased\s+\w+(?:\s+\w+){0,3}\s+\d+(?:\.\d+)?%|reduced\s+\w+(?:\s+\w+){0,3}\s+\d+(?:\.\d+)?%|improved\s+\w+(?:\s+\w+){0,3}\s+\d+(?:\.\d+)?%|accelerated\s+\w+(?:\s+\w+){0,3}\s+\d+(?:\.\d+)?%|\d+(?:\.\d+)?%\s+\w+(?:\s+\w+){0,3}|over\s+\d+[KM]?\+?\s+\w+|\d+[KM]?\+?\s+\w+(?:\s+\w+){0,2})/gi;

  // Match technology names
  const techPattern = /(Python|JavaScript|TypeScript|SQL|MySQL|PostgreSQL|MongoDB|Redis|AWS|Azure|GCP|Kubernetes|Docker|Terraform|Apache NiFi|Apache Kafka|Apache Airflow|Apache Spark|Hadoop|HDFS|Hive|Tableau|Power BI|Looker|TensorFlow|PyTorch|Neo4j|N8N|n8n|MCP|Prometheus|Grafana|Datadog|Jenkins|GitHub Actions|GitLab CI|Argo CD|Helm|Pulumi|Ansible|C#|ASP\.NET|\.NET|Java|Spring|React|Vue|Angular|Node\.js|jQuery|Ajax|HTML5?|CSS3?|SCSS|Sass|JIRA|Confluence|Tenable|Nessus|Pandas|NumPy|Scikit-learn|SAP|Excel|Yarn|npm|pnpm|Webpack|Vite|Bash|Shell|PowerShell|Glue|Redshift|Athena|Lambda|EC2|S3|ECS|EKS|CloudFormation|ISO 27001|BSI IT Grundschutz|GDPR|SOC 2)/g;

  // Find all matches
  const allMatches: Array<{ index: number; length: number; text: string; type: 'achievement' | 'tech' }> = [];

  let match;
  while ((match = achievementPattern.exec(text)) !== null) {
    allMatches.push({
      index: match.index,
      length: match[0].length,
      text: match[0],
      type: 'achievement'
    });
  }

  while ((match = techPattern.exec(text)) !== null) {
    allMatches.push({
      index: match.index,
      length: match[0].length,
      text: match[0],
      type: 'tech'
    });
  }

  // Sort by index and remove overlaps (prefer achievements over tech)
  allMatches.sort((a, b) => a.index - b.index);
  const filteredMatches = allMatches.filter((current, i) => {
    if (i === 0) return true;
    const previous = allMatches[i - 1];
    // Check if current overlaps with previous
    if (current.index < previous.index + previous.length) {
      // Prefer achievement over tech
      return current.type === 'achievement';
    }
    return true;
  });

  // Build the result with subtle underlines
  filteredMatches.forEach((match, i) => {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add highlighted match with subtle underline
    if (match.type === 'achievement') {
      parts.push(
        <span
          key={`achievement-${i}`}
          className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600/40 dark:border-blue-400/40 font-medium"
        >
          {match.text}
        </span>
      );
    } else {
      parts.push(
        <span
          key={`tech-${i}`}
          className="text-purple-600 dark:text-purple-400 border-b-2 border-purple-600/40 dark:border-purple-400/40"
        >
          {match.text}
        </span>
      );
    }

    lastIndex = match.index + match.length;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
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
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="card p-6 hover:shadow-lg transition-shadow"
      >
        <button
          onClick={toggleExpand}
          className="w-full text-left focus:outline-none rounded-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text-primary dark:text-gray-100 mb-1">
                {experience.position}
              </h3>
              <p className="text-lg text-accent-blue dark:text-blue-400 font-medium mb-2">
                {experience.company}
              </p>
              <p className="text-sm text-text-secondary dark:text-gray-400 mb-3">
                {experience.startDate} - {experience.endDate}
              </p>

              {/* Highlight Badge */}
              {experience.highlight && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className={`inline-block px-4 py-2 rounded-lg text-white text-sm font-medium shadow-md ${
                    experience.category
                      ? categoryGradients[experience.category]
                      : 'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}
                >
                  {experience.highlight}
                </motion.div>
              )}
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
                {/* Description with highlighted text */}
                {experience.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-text-primary dark:text-gray-200 mb-4 leading-relaxed"
                  >
                    {highlightText(experience.description)}
                  </motion.p>
                )}

                {/* Achievements */}
                {experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-semibold text-text-primary dark:text-gray-100 mb-3 flex items-center gap-2"
                    >
                      <span className="text-accent-blue dark:text-blue-400">✨</span>
                      Key Achievements:
                    </motion.h4>
                    <ul className="space-y-2.5 list-disc list-inside">
                      {experience.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.06 + 0.3 }}
                          className="text-text-secondary dark:text-gray-300 leading-relaxed"
                        >
                          {highlightText(achievement)}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies with bounce animation */}
                {experience.technologies.length > 0 && (
                  <div>
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-semibold text-text-primary dark:text-gray-100 mb-3 flex items-center gap-2"
                    >
                      <span className="text-accent-blue dark:text-blue-400">🛠️</span>
                      Technologies:
                    </motion.h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.03 + 0.45,
                            type: 'spring',
                            stiffness: 200,
                            damping: 10
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-primary-bg-secondary dark:bg-gray-700 text-text-secondary dark:text-gray-300 text-sm rounded-full border border-border dark:border-gray-600 cursor-default"
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
      </motion.div>
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
