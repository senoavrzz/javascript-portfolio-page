import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto text-center z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, Saya <span className="text-gradient">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Menciptakan pengalaman digital yang indah dan fungsional dengan teknologi modern
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Karya Saya
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hubungi Saya
          </Button>
        </div>
        
        <div className="mt-20 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
