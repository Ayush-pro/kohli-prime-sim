import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/cricket-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <Badge className="bg-cricket-green hover:bg-cricket-green/80 text-white px-4 py-2 text-sm font-medium">
            <Trophy className="w-4 h-4 mr-2" />
            Cricket Legend Analysis
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-cricket-green to-cricket-orange bg-clip-text text-transparent leading-tight">
            Virat Kohli
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">
              Prime Extended Stats
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore what Virat Kohli's statistics would look like if he never lost his prime form across ODI and Test formats
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-cricket-green hover:bg-cricket-green/90 text-white px-8 py-3 text-lg font-semibold shadow-cricket hover:shadow-glow transition-all duration-300"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            View Statistics
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-cricket-orange text-cricket-orange hover:bg-cricket-orange hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            <Star className="w-5 h-5 mr-2" />
            Career Highlights
          </Button>
        </div>
        
        {/* Quick Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-cricket-green">22,500+</div>
            <div className="text-sm text-muted-foreground">ODI Runs</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-cricket-orange">15,500+</div>
            <div className="text-sm text-muted-foreground">Test Runs</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-cricket-blue">140+</div>
            <div className="text-sm text-muted-foreground">Centuries</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-cricket-gold">65+</div>
            <div className="text-sm text-muted-foreground">Average</div>
          </div>
        </div>
      </div>
    </section>
  );
};