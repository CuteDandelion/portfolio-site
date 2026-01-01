'use client';

import Header from '@/components/Header';
import ImagineText from '@/components/ImagineText';
import VideoCarousel, { VideoItem } from '@/components/VideoCarousel';
import WorkTimeline, { WorkExperience } from '@/components/WorkTimeline';
import TechStack, { Technology } from '@/components/TechStack';
import About, { AboutInfo } from '@/components/About';

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
      {/* Header with Starfield */}
      <Header />

      {/* Highlights Section - NOX.AI */}
      <section id="highlights" className="section-container">
        <ImagineText subtitle="...building AI that thinks in skills, not just prompts" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              NOX.AI
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              <strong>Vision:</strong> A Skill-Based AI + built-in transparency powered by n8n, neo4j, and MCP
            </p>

            {/* n8n Workflow Image Placeholder */}
            <div className="card p-8 mb-8 bg-primary-bg-secondary">
              <div className="aspect-video flex items-center justify-center bg-white rounded-lg border-2 border-dashed border-border">
                <div className="text-center">
                  <p className="text-text-secondary text-lg mb-2">n8n Workflow Visualization</p>
                  <p className="text-sm text-text-secondary">Add your n8n workflow screenshot here</p>
                  <p className="text-xs text-text-secondary mt-2 font-mono">
                    /assets/images/n8n-workflow.png
                  </p>
                </div>
              </div>
            </div>

            {/* Video Carousel */}
            <VideoCarousel videos={noxAiVideos} title="Demonstrations" />
          </div>
        </div>
      </section>

      {/* Claude + MCP Section */}
      <section id="claude-mcp" className="section-container bg-primary-bg-secondary">
        <ImagineText subtitle="...automating the future with AI-powered workflows" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              Claude + MCP Automation
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Leveraging Claude AI and the Model Context Protocol to build intelligent automation workflows
            </p>

            <VideoCarousel videos={claudeMcpVideos} title="Automation Demos" />
          </div>
        </div>
      </section>

      {/* Work History */}
      <section id="work-history" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Work History
          </h2>
          <p className="text-lg text-text-secondary">
            My professional journey and experiences
          </p>
        </div>

        <WorkTimeline experiences={workExperiences} />
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="section-container bg-primary-bg-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-text-secondary">
            Technologies and tools I work with
          </p>
        </div>

        <TechStack technologies={technologies} />
      </section>

      {/* About Me */}
      <section id="about" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            About Me
          </h2>
        </div>

        <About info={aboutInfo} />
      </section>

      {/* Footer */}
      <footer className="bg-starfield-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Your Name. Built with Next.js, TypeScript, and deployed on Kubernetes.
          </p>
        </div>
      </footer>
    </main>
  );
}
