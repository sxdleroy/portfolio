
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Task Manager",
    description: "A CLI tool for managing daily tasks.",
    techStack: "Python, SQLite",
    github: "github.com/yourusername/task-manager",
    demo: "task-manager-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A minimal portfolio with terminal-inspired design.",
    techStack: "React, Tailwind, Supabase",
    github: "github.com/yourusername/portfolio",
    demo: "yourportfolio.vercel.app",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for managing products and orders.",
    techStack: "Next.js, Supabase, Stripe",
    github: "github.com/yourusername/ecommerce-dashboard",
    demo: "ecommerce-dashboard-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content space-y-8">
        <p className="font-mono text-gray-600 dark:text-terminal-text/70 text-center mb-8">
          [user@localhost ~]$ ls -la projects/
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-white dark:bg-terminal-bg border-gray-200 dark:border-terminal-text/10 hover:border-terminal-accent dark:hover:border-terminal-accent transition-colors duration-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="text-gray-600 dark:text-terminal-text/90 mb-2">
                  {project.description}
                </p>
                <p className="text-terminal-accent font-mono">
                  {project.techStack}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-4">
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`https://${project.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
