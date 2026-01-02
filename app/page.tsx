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
    company: 'Professional Development',
    position: 'Structured Upskilling',
    startDate: '2023',
    endDate: 'Present',
    description: 'Intensive self-directed learning period in Germany focused on advanced DevOps, cloud architecture, data engineering, and multi-agentic AI development. Building expertise across the full stack of modern infrastructure, automation, and intelligent systems.',
    achievements: [
      'Infrastructure/Policy as Code: Mastered Terraform, Helm, YAML, and Pulumi for scalable infrastructure automation',
      'Cloud Platforms: Deep expertise in AWS (EKS, EC2, VPC, IAM, Lambda) and Azure (AKS, ACR, VNet, Azure Entra ID)',
      'GitOps & CD: Implemented Argo CD and GitOps pipelines for declarative deployments',
      'Kubernetes & Containerization: Advanced Docker, Kubernetes manifests, Helm charts, pod autoscaling, and monitoring',
      'CI/CD & Automation: Built automated testing and deployment workflows with Jenkins and GitHub Actions',
      'DevOps Security: Comprehensive monitoring (Prometheus, Grafana), RBAC/IAM, secrets management, VPC peering',
      'Security Practice: Active learning through TryHackMe (THM) and HackTheBox (HTB) labs',
      'ETL/ELT Components: Hands-on with Apache Kafka, Spark, Airflow, AWS Glue, and AWS Redshift',
      'Multi-Agentic AI: Developing intelligent systems with N8N, MCP (Model Context Protocol), Neo4j (semantic graphs), and RAG',
    ],
    technologies: ['Terraform', 'Helm', 'Pulumi', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'Argo CD', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Apache Kafka', 'Apache Spark', 'Apache Airflow', 'AWS Glue', 'AWS Redshift', 'N8N', 'MCP', 'Neo4j', 'Python'],
  },
  {
    id: 'exp-2',
    company: 'IONOS',
    position: 'GRC Cybersecurity Engineer',
    startDate: 'Jul 2024',
    endDate: 'Apr 2025',
    description: 'Leading governance, risk, and compliance initiatives for a major cloud infrastructure provider in Berlin, Germany. Automated security workflows and compliance frameworks across hybrid cloud environments.',
    achievements: [
      'Increased operational efficiency and audit readiness by 30% through automated security and compliance workflows',
      'Designed multi-standard compliance automation framework using Python (Pandas), JIRA API, and IONOS Cloud AI Model Hub',
      'Developed tactical Power BI dashboards integrating Tenable, Excel, and governance systems as single source of truth',
      'Defined and automated key KPIs for real-time monitoring of vulnerabilities, control effectiveness, and remediation progress',
      'Bridged GRC, cybersecurity, and engineering teams by translating complex telemetry into actionable compliance insights',
    ],
    technologies: ['Python', 'Pandas', 'JIRA', 'Power BI', 'Tenable', 'ISO 27001', 'BSI IT Grundschutz', 'Cloud Security'],
  },
  {
    id: 'exp-3',
    company: 'GlobeOSS',
    position: 'Senior System Engineer',
    startDate: 'May 2020',
    endDate: 'Aug 2023',
    description: 'Led Business Intelligence and System Engineering initiatives for enterprise and telecom clients across Malaysia and international markets. Built scalable data ecosystems and ML-driven analytics solutions.',
    achievements: [
      'Accelerated Brunei Telco BI operations by 50% and improved data quality by 30% through Python, SQL, and Apache NiFi ETL pipelines',
      'Architected end-to-end data ecosystems across Hadoop, HDFS, Yarn, and Hive supporting millions of daily records',
      'Transformed decision-making through Tableau and Power BI dashboards with AI/ML-driven forecasting',
      'Enhanced global data reliability for Tory Burch (US) by validating new PLM SAP data integrations',
      'Delivered TensorFlow-based ML solutions including death certificate authenticity POC',
      'Mentored engineering teams, led client workshops, and trained Brunei customers on Apache NiFi',
      'Partnered with major Malaysian telco clients to deliver data-driven insights for business strategy',
    ],
    technologies: ['Python', 'SQL', 'Apache NiFi', 'Hadoop', 'HDFS', 'Yarn', 'Hive', 'Tableau', 'Power BI', 'TensorFlow', 'SAP', 'ETL'],
  },
  {
    id: 'exp-4',
    company: 'GlobeOSS',
    position: 'Junior System Engineer',
    startDate: 'Apr 2018',
    endDate: 'May 2020',
    description: '',
    achievements: [],
    technologies: [],
  },
  {
    id: 'exp-5',
    company: 'Persys Technologies Berhad',
    position: 'ASP.NET Web Developer',
    startDate: 'Oct 2016',
    endDate: 'Dec 2016',
    description: 'Developed a construction site fault evidence portal, delivering the full software lifecycle from development to deployment with focus on DevOps practices.',
    achievements: [
      'Built backend functionality using ASP.NET with C#, implementing MVC architecture for modular, maintainable code',
      'Developed frontend components with HTML, JavaScript, jQuery, Ajax, and CSS for interactive features',
      'Promoted team collaboration and DevOps practices, automating builds and deployments',
      'Reduced errors and accelerated release cycles through automated workflows',
    ],
    technologies: ['ASP.NET', 'C#', 'HTML', 'JavaScript', 'jQuery', 'Ajax', 'CSS', 'MVC'],
  },
];

const technologies: Technology[] = [
  // DevOps
  {
    id: 'tech-terraform',
    name: 'Terraform',
    iconPath: '/assets/icons/tech/terraform.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-docker',
    name: 'Docker',
    iconPath: '/assets/icons/tech/docker.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-github',
    name: 'GitHub',
    iconPath: '/assets/icons/tech/github.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-github-actions',
    name: 'GitHub Actions',
    iconPath: '/assets/icons/tech/github-actions.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-jenkins',
    name: 'Jenkins',
    iconPath: '/assets/icons/tech/jenkins.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-helm',
    name: 'Helm',
    iconPath: '/assets/icons/tech/helm.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-argocd',
    name: 'Argo CD',
    iconPath: '/assets/icons/tech/argocd.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-pulumi',
    name: 'Pulumi',
    iconPath: '/assets/icons/tech/pulumi.svg',
    category: 'DevOps',
  },
  {
    id: 'tech-ansible',
    name: 'Ansible',
    iconPath: '/assets/icons/tech/ansible.svg',
    category: 'DevOps',
  },

  // Cloud
  {
    id: 'tech-aws',
    name: 'AWS',
    iconPath: '/assets/icons/tech/aws.svg',
    category: 'Cloud',
  },
  {
    id: 'tech-azure',
    name: 'Azure',
    iconPath: '/assets/icons/tech/azure.svg',
    category: 'Cloud',
  },
  {
    id: 'tech-kubernetes',
    name: 'Kubernetes',
    iconPath: '/assets/icons/tech/kubernetes.svg',
    category: 'Cloud',
  },

  // Languages
  {
    id: 'tech-python',
    name: 'Python',
    iconPath: '/assets/icons/tech/python.svg',
    category: 'Languages',
  },
  {
    id: 'tech-javascript',
    name: 'JavaScript',
    iconPath: '/assets/icons/tech/javascript.svg',
    category: 'Languages',
  },
  {
    id: 'tech-csharp',
    name: 'C#',
    iconPath: '/assets/icons/tech/csharp.svg',
    category: 'Languages',
  },
  {
    id: 'tech-sql',
    name: 'SQL',
    iconPath: '/assets/icons/tech/sql.svg',
    category: 'Languages',
  },
  {
    id: 'tech-html',
    name: 'HTML',
    iconPath: '/assets/icons/tech/html.svg',
    category: 'Languages',
  },
  {
    id: 'tech-css',
    name: 'CSS',
    iconPath: '/assets/icons/tech/css.svg',
    category: 'Languages',
  },

  // Databases & Data
  {
    id: 'tech-kafka',
    name: 'Apache Kafka',
    iconPath: '/assets/icons/tech/kafka.svg',
    category: 'Databases',
  },
  {
    id: 'tech-hadoop',
    name: 'Hadoop',
    iconPath: '/assets/icons/tech/hadoop.svg',
    category: 'Databases',
  },
  {
    id: 'tech-hive',
    name: 'Apache Hive',
    iconPath: '/assets/icons/tech/hive.svg',
    category: 'Databases',
  },
  {
    id: 'tech-neo4j',
    name: 'Neo4j',
    iconPath: '/assets/icons/tech/neo4j.svg',
    category: 'Databases',
  },
  {
    id: 'tech-redshift',
    name: 'AWS Redshift',
    iconPath: '/assets/icons/tech/redshift.svg',
    category: 'Databases',
  },

  // Monitoring
  {
    id: 'tech-prometheus',
    name: 'Prometheus',
    iconPath: '/assets/icons/tech/prometheus.svg',
    category: 'Monitoring',
  },
  {
    id: 'tech-grafana',
    name: 'Grafana',
    iconPath: '/assets/icons/tech/grafana.svg',
    category: 'Monitoring',
  },

  // Tools
  {
    id: 'tech-n8n',
    name: 'N8N',
    iconPath: '/assets/icons/tech/n8n.svg',
    category: 'Tools',
  },
  {
    id: 'tech-nifi',
    name: 'Apache NiFi',
    iconPath: '/assets/icons/tech/nifi.svg',
    category: 'Tools',
  },
  {
    id: 'tech-spark',
    name: 'Apache Spark',
    iconPath: '/assets/icons/tech/spark.svg',
    category: 'Tools',
  },
  {
    id: 'tech-airflow',
    name: 'Apache Airflow',
    iconPath: '/assets/icons/tech/airflow.svg',
    category: 'Tools',
  },
  {
    id: 'tech-tableau',
    name: 'Tableau',
    iconPath: '/assets/icons/tech/tableau.svg',
    category: 'Tools',
  },
  {
    id: 'tech-powerbi',
    name: 'Power BI',
    iconPath: '/assets/icons/tech/powerbi.svg',
    category: 'Tools',
  },
  {
    id: 'tech-jira',
    name: 'JIRA',
    iconPath: '/assets/icons/tech/jira.svg',
    category: 'Tools',
  },
  {
    id: 'tech-sap',
    name: 'SAP',
    iconPath: '/assets/icons/tech/sap.svg',
    category: 'Tools',
  },

  // Frameworks
  {
    id: 'tech-tensorflow',
    name: 'TensorFlow',
    iconPath: '/assets/icons/tech/tensorflow.svg',
    category: 'Frameworks',
  },
  {
    id: 'tech-aspnet',
    name: 'ASP.NET',
    iconPath: '/assets/icons/tech/aspnet.svg',
    category: 'Frameworks',
  },
  {
    id: 'tech-jquery',
    name: 'jQuery',
    iconPath: '/assets/icons/tech/jquery.svg',
    category: 'Frameworks',
  },
];

const aboutInfo: AboutInfo = {
  name: 'Justin',
  bio: `I'm Justin, an Automation Engineer dedicated to redefining how organizations operate through the power of AI-driven workflows. My expertise lies at the intersection of DevOps, Data Engineering, and intelligent automation.

Using n8n, I design agentic workflows that go beyond simple tasks, creating self-governing systems that connect technical infrastructure with core business operations. Whether I'm optimizing a cloud-native environment, engineering data pipelines, or automating complex business logic, my goal remains the same: to replace manual toil with scalable, reliable, and intelligent systems that drive reliability, efficiency, and measurable impact across the entire organization.`,
  photo: '/assets/images/profile-placeholder.svg',
  email: 'your.email@example.com',
  linkedin: 'https://www.linkedin.com/in/justin-chin-b9908a235/',
  github: 'https://github.com/CuteDandelion/',
  website: 'https://portfolio.misakirose.com',
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
