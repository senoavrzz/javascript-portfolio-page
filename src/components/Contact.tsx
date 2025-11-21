import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:john@example.com", label: "Email" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">
          Mari <span className="text-gradient">Berkolaborasi</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Punya project menarik? Mari kita diskusikan dan wujudkan bersama!
        </p>
        
        <div className="card-gradient rounded-2xl p-8 border border-border">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20 hover:border-primary/50"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              );
            })}
          </div>
          
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            onClick={() => window.location.href = 'mailto:john@example.com'}
          >
            <Mail className="w-5 h-5 mr-2" />
            Kirim Email
          </Button>
        </div>
        
        <p className="text-muted-foreground mt-12">
          © 2024 John Doe. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
