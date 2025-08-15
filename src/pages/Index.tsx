import { HeroSection } from "@/components/HeroSection";
import { FormatTabs } from "@/components/FormatTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Statistical Comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare Virat Kohli's actual career statistics with hypothetical "prime extended" numbers across different formats
          </p>
        </div>
        
        <FormatTabs />
      </main>
    </div>
  );
};

export default Index;
