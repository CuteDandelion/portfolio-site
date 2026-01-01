# Portfolio Site

[![Docker Build](https://github.com/YOUR_USERNAME/portfolio-site/actions/workflows/docker-build-push.yml/badge.svg)](https://github.com/YOUR_USERNAME/portfolio-site/actions/workflows/docker-build-push.yml)
[![Docker Hub](https://img.shields.io/docker/pulls/YOUR_DOCKERHUB_USERNAME/portfolio-site.svg)](https://hub.docker.com/r/YOUR_DOCKERHUB_USERNAME/portfolio-site)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, secure, and scalable portfolio website built with Next.js 14, TypeScript, and deployed on Kubernetes. Features a stunning starfield header, animated sections, comprehensive DevOps best practices, and automated CI/CD with GitHub Actions.

## Features

- **Starfield Header** - Animated canvas background with twinkling stars and "IMAGINE" text
- **Highlights Section** - Showcase your projects with video carousels
  - NOX.AI - Skill-based AI demonstrations
  - Claude+MCP - Automation workflow videos
- **Work History Timeline** - Collapsible work experiences with streaming text effect
- **Tech Stack Grid** - Animated technology icons with hover effects
- **About Me** - Personal information with social links
- **Fully Responsive** - Mobile-first design
- **SEO Optimized** - Complete meta tags and Open Graph support
- **Security Hardened** - Comprehensive security headers and best practices
- **Kubernetes Ready** - Production-ready manifests with HPA and monitoring
- **Prometheus Metrics** - Built-in analytics and monitoring support
- **CI/CD Pipeline** - Automated Docker builds and DockerHub deployment with GitHub Actions

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

### Infrastructure
- Docker (multi-stage builds)
- Kubernetes
- Nginx (static file serving)
- Prometheus (metrics)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Docker (for containerization)
- Kubernetes cluster (for deployment)

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Customization

#### 1. Update Personal Information

Edit `app/page.tsx` and update the data objects:

```typescript
// About information
const aboutInfo: AboutInfo = {
  name: 'Your Name',
  bio: 'Your bio...',
  photo: '/assets/images/profile.jpg',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  // ...
};

// Work experiences
const workExperiences: WorkExperience[] = [
  {
    company: 'Your Company',
    position: 'Your Position',
    // ...
  },
];

// Technologies
const technologies: Technology[] = [
  {
    name: 'Docker',
    iconPath: '/assets/icons/tech/docker.svg',
    category: 'DevOps',
  },
  // ...
];
```

#### 2. Add Your Assets

Place your files in the appropriate directories:

- **Images**: `public/assets/images/`
  - `profile.jpg` - Your photo
  - `n8n-workflow.png` - n8n workflow screenshot
  - `og-image.jpg` - Open Graph preview image

- **Videos**: `public/assets/videos/`
  - `nox-ai/` - NOX.AI demo videos with posters
  - `claude-mcp/` - Claude+MCP automation videos with posters

- **Icons**: `public/assets/icons/tech/`
  - Add SVG icons for your tech stack

#### 3. Update SEO Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your description...',
  // Update all metadata fields
};
```

#### 4. Add Videos

Update video arrays in `app/page.tsx`:

```typescript
const noxAiVideos: VideoItem[] = [
  {
    id: 'nox-1',
    title: 'Your Video Title',
    description: 'Description...',
    videoUrl: '/assets/videos/nox-ai/demo-1.mp4',
    posterUrl: '/assets/videos/nox-ai/demo-1-poster.jpg',
    // For YouTube videos:
    isYouTube: true,
    youtubeId: 'VIDEO_ID',
  },
];
```

## Building for Production

### Static Export

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Test Production Build Locally

```bash
# Install a simple HTTP server
npm install -g serve

# Serve the built files
serve -s out
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t your-registry/portfolio-site:latest .
```

### Run Container Locally

```bash
docker run -p 8080:80 your-registry/portfolio-site:latest
```

Visit [http://localhost:8080](http://localhost:8080)

### Push to Registry

```bash
docker push your-registry/portfolio-site:latest
```

## CI/CD with GitHub Actions

### Automated Docker Build and Push to DockerHub

The repository includes a GitHub Actions workflow that automatically builds and pushes Docker images to DockerHub.

#### Setup DockerHub Integration

1. **Create a DockerHub Access Token**
   - Go to [DockerHub Account Settings](https://hub.docker.com/settings/security)
   - Click "New Access Token"
   - Name it (e.g., "github-actions")
   - Copy the token (you won't see it again!)

2. **Add GitHub Secrets**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add the following secrets:
     - `DOCKERHUB_USERNAME`: Your DockerHub username
     - `DOCKERHUB_TOKEN`: The access token you created

3. **Workflow Triggers**

   The workflow automatically runs on:
   - **Push to main/master**: Builds and pushes with `latest` tag and branch-specific tags
   - **Git tags** (e.g., `v1.0.0`): Builds and pushes with semantic version tags
   - **Pull requests**: Builds only (doesn't push) for testing

4. **Image Tags**

   Images are automatically tagged with:
   - `latest` - Latest build from main/master branch
   - `main-<git-sha>` - Branch name + commit SHA
   - `1.0.0`, `1.0`, `1` - Semantic versions (when using git tags)

5. **Create a Release**

   To create a versioned release:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

   This will automatically:
   - Build the Docker image
   - Push to DockerHub with tags: `1.0.0`, `1.0`, `1`, and `latest`
   - Update the deployment manifest

6. **View Build Status**

   Check the "Actions" tab in your GitHub repository to see build progress and logs.

7. **Multi-platform Builds**

   The workflow builds for both:
   - `linux/amd64` (x86_64)
   - `linux/arm64` (ARM, including Apple Silicon)

### Manual Docker Build (Alternative)

If you prefer manual builds instead of CI/CD:

```bash
# Build for your platform
docker build -t your-dockerhub-username/portfolio-site:latest .

# Push to DockerHub
docker push your-dockerhub-username/portfolio-site:latest
```

## Kubernetes Deployment

### Prerequisites

- Kubernetes cluster (1.19+)
- kubectl configured
- Metrics Server installed (for HPA)
- Prometheus Operator (optional, for ServiceMonitor)

### Deploy

1. **Update image in deployment manifest**

   Edit `kubernetes/deployment.yaml`:
   ```yaml
   image: your-registry/portfolio-site:latest
   ```

2. **Update namespace in ServiceMonitor** (if using Prometheus)

   Edit `kubernetes/servicemonitor.yaml`:
   ```yaml
   namespaceSelector:
     matchNames:
     - your-namespace  # Change from 'default'
   ```

3. **Apply manifests**

   ```bash
   # Create namespace (optional)
   kubectl create namespace portfolio

   # Apply all manifests
   kubectl apply -f kubernetes/ -n portfolio
   ```

4. **Verify deployment**

   ```bash
   kubectl get pods -n portfolio
   kubectl get svc -n portfolio
   kubectl get hpa -n portfolio
   ```

### Access the Application

Since the service is ClusterIP, you'll need to expose it via:

1. **Ingress** (recommended for production)
2. **Port forwarding** (for testing)

   ```bash
   kubectl port-forward svc/portfolio-site 8080:80 -n portfolio
   ```

### Monitoring

The application exposes metrics at `/metrics` endpoint for Prometheus scraping.

**View metrics:**
```bash
kubectl port-forward svc/portfolio-site 8080:80 -n portfolio
curl http://localhost:8080/metrics
```

**Prometheus will automatically scrape** if ServiceMonitor is deployed.

### Scaling

The HPA automatically scales based on:
- CPU utilization (70% target)
- Memory utilization (80% target)
- Min replicas: 2
- Max replicas: 10

**Manual scaling:**
```bash
kubectl scale deployment portfolio-site --replicas=5 -n portfolio
```

## Security Features

### Docker Security
- Non-root user (UID 101)
- Minimal base image (Alpine)
- Multi-stage build
- Health checks

### Kubernetes Security
- Security contexts
- Read-only root filesystem (where possible)
- No privilege escalation
- Dropped capabilities
- Resource limits

### Nginx Security Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Strict-Transport-Security (HSTS)
- Content-Security-Policy (CSP)
- Referrer-Policy

## Performance Optimization

- Static export (no server-side rendering)
- Gzip compression
- Browser caching (1 year for assets)
- Image optimization
- Lazy loading for videos
- Code splitting

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Container fails to start
```bash
# Check logs
docker logs <container-id>

# Check health
docker inspect <container-id> | grep Health
```

### Kubernetes pods not ready
```bash
# Check pod status
kubectl describe pod <pod-name> -n portfolio

# Check logs
kubectl logs <pod-name> -n portfolio

# Check events
kubectl get events -n portfolio --sort-by='.lastTimestamp'
```

### HPA not scaling
```bash
# Check metrics server
kubectl top nodes
kubectl top pods -n portfolio

# Check HPA status
kubectl describe hpa portfolio-site -n portfolio
```

## Project Structure

```
portfolio-site/
├── .github/               # GitHub configurations
│   └── workflows/        # GitHub Actions workflows
│       └── docker-build-push.yml  # Docker CI/CD pipeline
├── app/                   # Next.js app directory
│   ├── layout.tsx        # Root layout with SEO
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Header.tsx        # Starfield header
│   ├── ImagineText.tsx   # Animated section divider
│   ├── VideoCarousel.tsx # Video carousel
│   ├── WorkTimeline.tsx  # Work history
│   ├── TechStack.tsx     # Tech stack grid
│   └── About.tsx         # About section
├── lib/                  # Utilities
│   └── analytics.ts      # Analytics tracking
├── public/               # Static assets
│   └── assets/          # Images, videos, icons
├── kubernetes/           # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── hpa.yaml
│   ├── configmap.yaml
│   └── servicemonitor.yaml
├── Dockerfile           # Multi-stage Docker build
├── nginx.conf          # Nginx configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies

```

## Contributing

This is a personal portfolio site, but feel free to fork and use as a template!

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Kubernetes
