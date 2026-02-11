import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  period: string;
  highlights: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [githubProjects, setGithubProjects] = useState<any[]>([]);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: 'Khoury Research Matcher',
      description: 'Full-stack web application that facilitates connections between undergraduate students and over 858 Khoury College professors using intelligent research-interest matching algorithms.',
      technologies: ['Python', 'FastAPI', 'React', 'SQLite', 'Beautiful Soup'],
      githubUrl: 'https://github.com/jaydonmoses/undergraduate-assistant',
      period: 'Sep 2025 – Present',
      highlights: [
        'Designed relational SQLite database for faculty research areas and profiles',
        'Implemented automated web scraping for 56+ professor pages',
        'Intelligent matching algorithms for relevant student-professor pairings'
      ]
    },
    {
      id: 2,
      title: 'FIJI E-commerce Store',
      description: 'Full-stack e-commerce platform with customer storefront and comprehensive admin dashboard, featuring secure authentication and order management.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Next.js'],
      githubUrl: 'https://github.com/jaydonmoses/fiji-ecommerce',
      period: 'Jan 2026 – Present',
      highlights: [
        'Shopping cart functionality and product search',
        'Secure authentication workflows and order management',
        'PostgreSQL database with Prisma ORM',
        'Deployed on Vercel with automated CI/CD pipelines'
      ]
    },
    {
      id: 3,
      title: 'Real-Time Chat Application',
      description: 'Robust real-time messaging system engineered for low-latency communication and seamless interactions among high-volume users.',
      technologies: ['Java', 'Spring Boot', 'WebSockets', 'STOMP'],
      githubUrl: 'https://github.com/jaydonmoses/ChatApplications',
      period: 'Jan 2026',
      highlights: [
        'STOMP-based pub/sub architecture with clear separation of concerns',
        'WebSocket configuration with controllers and services',
        'Optimized for high-volume user interactions'
      ]
    }
  ];

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jaydonmoses/repos?sort=updated&per_page=10');
        if (response.ok) {
          const repos = await response.json();
          const filteredRepos = repos.filter((repo: any) => !repo.fork && repo.name !== 'jaydonmoses');
          setGithubProjects(filteredRepos);
        }
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
    setProjects(featuredProjects);
  }, []);

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {project.image && (
        <div className="h-48 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] flex items-center justify-center">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
      )}
      
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl">
            {project.title}
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            {project.period}
          </Badge>
        </div>
        
        <CardDescription className="leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {project.highlights && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
            <ul className="text-sm space-y-1">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <i className="fas fa-check-circle text-[#ff6b6b] mr-2 mt-0.5 flex-shrink-0"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-[#ff6b6b]/10 text-[#ff6b6b] hover:bg-[#ff6b6b]/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
        
      <CardFooter className="flex space-x-3 pt-0">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i>
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild size="sm" className="bg-[#ff6b6b] hover:bg-[#ff5252]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  const GitHubProjectCard: React.FC<{ repo: any }> = ({ repo }) => (
    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg flex items-center">
            <i className="fab fa-github mr-2 text-gray-600 dark:text-gray-400"></i>
            {repo.name}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs">
              <i className="fas fa-star mr-1"></i>
              {repo.stargazers_count}
            </Badge>
            <Badge variant="outline" className="text-xs">
              <i className="fas fa-code-branch mr-1"></i>
              {repo.forks_count}
            </Badge>
          </div>
        </div>
        
        <CardDescription className="leading-relaxed">
          {repo.description || 'No description available'}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          {repo.language && (
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {repo.language}
            </Badge>
          )}
          <span className="text-xs text-muted-foreground">
            Updated {new Date(repo.updated_at).toLocaleDateString()}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button asChild variant="outline" size="sm" className="w-full group-hover:border-[#ff6b6b] group-hover:text-[#ff6b6b]">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            View Repository
          </a>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, machine learning, and software engineering.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            More Projects from GitHub
          </h3>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff6b6b]"></div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Loading projects...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubProjects.slice(0, 6).map((repo) => (
                <GitHubProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <a
              href="https://github.com/jaydonmoses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#ff6b6b] text-white rounded-lg hover:bg-[#ff5252] transition-colors duration-300 font-semibold"
            >
              <i className="fab fa-github"></i>
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;