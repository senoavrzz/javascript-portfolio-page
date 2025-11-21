import { Code2, Database, Palette, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, PostgreSQL, REST APIs",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Design Systems, Prototyping",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-First, Progressive Web Apps",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Keahlian <span className="text-gradient">Saya</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
