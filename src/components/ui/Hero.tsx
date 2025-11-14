import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaners.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Professional Cleaning Services You Can Trust
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Experience spotless spaces with our expert cleaning team. Quality service, every time.
          </p>
          <Button size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90">
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
