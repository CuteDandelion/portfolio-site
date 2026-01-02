import HomeContent from '@/components/HomeContent';
import { VideoItem } from '@/components/VideoCarousel';
import { WorkExperience } from '@/components/WorkTimeline';
import { Technology } from '@/components/TechStack';
import { AboutInfo } from '@/components/About';

// Sample data - Replace with your actual data
const noxAiVideos: VideoItem[] = [
  {
    id: 'nox-1',
    title: 'NOX.AI Demo - Skill Chaining',
    description: 'Demonstrates how NOX.AI chains skills together to solve complex problems with built-in transparency.',
    videoUrl: '/assets/videos/nox-ai/demo-1.mp4',
    posterUrl: '/assets/videos/nox-ai/demo-1-poster.jpg',
  },
  // Add more videos here
];

const claudeMcpVideos: VideoItem[] = [
  {
    id: 'claude-1',
    title: 'Claude + MCP Workflow Automation',
    description: 'Showcasing automated workflows powered by Claude AI and the Model Context Protocol.',
    videoUrl: '/assets/videos/claude-mcp/automation-1.mp4',
    posterUrl: '/assets/videos/claude-mcp/automation-1-poster.jpg',
  },
  // Add more videos here
];

const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    company: 'Company A',
    position: 'Senior DevOps Engineer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Leading the DevOps transformation initiative, implementing CI/CD pipelines, and managing Kubernetes infrastructure at scale.',
    achievements: [
      'Reduced deployment time by 70% through automated CI/CD pipelines',
      'Architected and deployed multi-region Kubernetes clusters serving 1M+ users',
      'Implemented comprehensive monitoring with Prometheus and Grafana',
    ],
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
  {
    id: 'exp-2',
    company: 'Company B',
    position: 'DevOps Engineer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Managed cloud infrastructure and implemented automation solutions for development teams.',
    achievements: [
      'Migrated legacy applications to containerized environments',
      'Reduced infrastructure costs by 40% through optimization',
      'Built internal tools for developer productivity',
    ],
    technologies: ['AWS', 'Python', 'Ansible', 'Jenkins', 'Docker'],
  },
  // Add more experiences
];

const technologies: Technology[] = [
  {
    id: 'tech-github',
    name: 'GitHub',
    iconPath: '/assets/icons/tech/github.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-docker',
    name: 'Docker',
    iconPath: '/assets/icons/tech/docker.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-kubernetes',
    name: 'Kubernetes',
    iconPath: '/assets/icons/tech/kubernetes.svg',
    category: 'Cloud',
  },
  // Add more technologies
];

const aboutInfo: AboutInfo = {
  name: 'Your Name',
  bio: `I'm a passionate DevOps Engineer and AI enthusiast with a focus on automation, cloud infrastructure, and building intelligent systems.

With expertise in Kubernetes, Docker, Terraform, and cloud platforms, I help organizations scale their infrastructure efficiently and securely.

I'm particularly interested in the intersection of AI and automation, exploring how tools like Claude AI and MCP can transform workflows and enhance productivity.`,
  photo: '/assets/images/profile-placeholder.svg',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  website: 'https://yourwebsite.com',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeContent
        noxAiVideos={noxAiVideos}
        claudeMcpVideos={claudeMcpVideos}
        workExperiences={workExperiences}
        technologies={technologies}
        aboutInfo={aboutInfo}
      />
    </main>
  );
}
