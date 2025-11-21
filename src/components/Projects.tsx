import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan real-time collaboration dan notifikasi",
    tech: ["TypeScript", "React", "Firebase"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Portfolio Website",
    description: "Website portfolio interaktif dengan animasi modern dan design responsive",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Project <span className="text-gradient">Terbaru</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
