import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-primary selection:text-background overflow-x-hidden">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }} 
      />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        

      </div>
    </main>
  );
}
