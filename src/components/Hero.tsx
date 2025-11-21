import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Hi, Saya <span className="text-gradient">M. Ragil Syahputra</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Calon Ketua Lembaga IMS FTUI 2026
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Menciptakan pengalaman digital yang indah dan fungsional dengan teknologi modern
            </p>
            
            <div className="flex gap-4 flex-wrap">
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
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <img 
                src={profilePhoto} 
                alt="M. Ragil Syahputra - Portfolio Photo" 
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 animate-bounce text-center">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
export default Hero;