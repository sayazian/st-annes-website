import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Clock, Heart } from "lucide-react";

export default function Labyrinth() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="labyrinth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" data-testid="text-labyrinth-title">
            The Labyrinth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A sacred space for meditation, prayer, and spiritual reflection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold" data-testid="text-what-is-labyrinth">
              What is a Labyrinth?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A labyrinth is an ancient pattern found in many cultures around the world. 
              Unlike a maze, which has dead ends and multiple paths, a labyrinth has a 
              single path that winds to the center and back out again. Walking the 
              labyrinth is a meditative practice that can quiet the mind and open the heart.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              St. Anne's labyrinth is a beautiful outdoor space available for prayer, 
              meditation, and contemplation. The winding path invites you to slow down, 
              breathe deeply, and connect with the divine presence in a peaceful setting.
            </p>
          </div>

          <Card className="hover-elevate">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit the Labyrinth</h4>
                  <p className="text-sm text-muted-foreground">
                    Our labyrinth is located on the church grounds and is open to the 
                    public during daylight hours. You are welcome to walk it at your own pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">When to Visit</h4>
                  <p className="text-sm text-muted-foreground">
                    Open daily during daylight hours. No appointment necessary – come 
                    whenever your spirit calls you to quiet reflection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">How to Walk</h4>
                  <p className="text-sm text-muted-foreground">
                    There is no right or wrong way to walk a labyrinth. Simply enter, 
                    follow the path with an open heart, and allow the journey to unfold.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-xl font-serif font-semibold mb-4 text-center">
            Three Stages of the Labyrinth Walk
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold mb-3">
                1
              </div>
              <h4 className="font-semibold mb-2">Releasing</h4>
              <p className="text-sm text-muted-foreground">
                The path inward is a time to let go of worries, quiet the mind, 
                and shed the details of your life.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold mb-3">
                2
              </div>
              <h4 className="font-semibold mb-2">Receiving</h4>
              <p className="text-sm text-muted-foreground">
                The center is a place to pause, rest, and receive whatever 
                insights, peace, or healing may come.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold mb-3">
                3
              </div>
              <h4 className="font-semibold mb-2">Returning</h4>
              <p className="text-sm text-muted-foreground">
                The path outward is a time to integrate your experience and 
                prepare to re-enter the world renewed.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Questions about the labyrinth? We'd love to hear from you.
          </p>
          <Button variant="outline" asChild data-testid="button-contact-labyrinth">
            <a href="#contact">
              Contact Us
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
