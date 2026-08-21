import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import heroImage from "@assets/ChatGPT Image Nov 19, 2025, 10_19_52 PM_1763619739058.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6" data-testid="text-hero-title">
            Welcome to St. Anne's Episcopal Church
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            A welcoming community of faith in Fremont, California
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20"
              data-testid="button-join-sunday"
            >
              Join Us Sunday - 10:00 AM
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20"
              asChild
              data-testid="button-zoom-link"
            >
              <a href="https://zoom.us/j/93548667568?pwd=YsPyWHlfttRyIlOI1kOabbQLknAiWC.1" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Join on Zoom
              </a>
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm" data-testid="text-serving-since">
            Serving the Fremont community with love and grace
          </p>
        </div>
      </div>
    </section>
  );
}
