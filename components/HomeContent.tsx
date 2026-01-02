'use client';

import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ImagineText from '@/components/ImagineText';
import VideoCarousel, { VideoItem } from '@/components/VideoCarousel';
import WorkTimeline, { WorkExperience } from '@/components/WorkTimeline';
import TechStack, { Technology } from '@/components/TechStack';
import About, { AboutInfo } from '@/components/About';

interface HomeContentProps {
  noxAiVideos: VideoItem[];
  claudeMcpVideos: VideoItem[];
  workExperiences: WorkExperience[];
  technologies: Technology[];
  aboutInfo: AboutInfo;
}

export default function HomeContent({
  noxAiVideos,
  claudeMcpVideos,
  workExperiences,
  technologies,
  aboutInfo,
}: HomeContentProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Navigation */}
      <Navigation onThemeToggle={toggleTheme} isDark={theme === 'dark'} />

      {/* Header with Starfield */}
      <Header />

      {/* Highlights Section - NOX.AI */}
      <section id="highlights" className="section-container">
        <ImagineText subtitle="...building AI that thinks in skills with semantic graphs, not just prompts" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary dark:text-gray-100 mb-4">
              NOX.AI
            </h2>
            <p className="text-xl text-text-secondary dark:text-gray-300 mb-8">
              <strong>Vision:</strong> A Skill-Based AI + built-in transparency powered by n8n, neo4j, and MCP
            </p>

            {/* n8n Workflow Image Placeholder */}
            <div className="card p-8 mb-8 bg-primary-bg-secondary dark:bg-gray-800/50">
              <div className="aspect-video flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg border-2 border-dashed border-border dark:border-gray-600">
                <div className="text-center">
                  <p className="text-text-secondary dark:text-gray-300 text-lg mb-2">n8n Workflow Visualization</p>
                  <p className="text-sm text-text-secondary dark:text-gray-400">Add your n8n workflow screenshot here</p>
                  <p className="text-xs text-text-secondary dark:text-gray-500 mt-2 font-mono">
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
      <section id="claude-mcp" className="section-container bg-primary-bg-secondary dark:bg-gray-800/30">
        <ImagineText subtitle="...automating the future with AI-powered workflows" />

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary dark:text-gray-100 mb-4">
              Claude + MCP Automation
            </h2>
            <p className="text-xl text-text-secondary dark:text-gray-300 mb-8">
              Leveraging Claude AI and the Model Context Protocol to automate workflows
            </p>

            <VideoCarousel videos={claudeMcpVideos} title="Automation Demos" />
          </div>
        </div>
      </section>

      {/* Work History */}
      <section id="work-history" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary dark:text-gray-100 mb-4">
            Work History
          </h2>
          <p className="text-lg text-text-secondary dark:text-gray-300">
            My professional journey and experiences
          </p>
        </div>

        <WorkTimeline experiences={workExperiences} />
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="section-container bg-primary-bg-secondary dark:bg-gray-800/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary dark:text-gray-100 mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-text-secondary dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <TechStack technologies={technologies} />
      </section>

      {/* About Me */}
      <section id="about" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary dark:text-gray-100 mb-4">
            About Me
          </h2>
        </div>

        <About info={aboutInfo} />
      </section>

      {/* Footer */}
      <footer className="bg-starfield-dark dark:bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm opacity-80 flex items-center justify-center gap-2">
            © 2026 Built with Claude Code with love
            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </p>
        </div>
      </footer>
    </>
  );
}
